import {
    createBrowserRouter,
    RouterProvider,
    defer,
    redirect,
} from 'react-router-dom';
import Auth from './components/Auth/Auth.jsx';
import ErrorPage from './util/error-page.jsx';
import Login from './components/Auth/Login.jsx';
import SingUp from './components/Auth/SingUp.jsx';
import './index.scss';
import Recommendation from './components/Recommendation/Recommendation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Boardgames from './components/Boardgames/Boardgames.jsx';
import { useState, useEffect } from 'react';
const App = () => {
    const [token, setToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [isAuth, setisAuth] = useState(false);
   
    useEffect(() => {
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');

        if (!token || !expiryDate) {
            return;
        }
        if (new Date(expiryDate) <= new Date()) {
            logoutHandler();
            return;
        }
        const userId = localStorage.getItem('userId');
        const remainingMilliseconds =
            new Date(expiryDate).getTime() - new Date().getTime();
        setToken(token);
        setuserId(userId);
        setisAuth(true);
        setAutoLogout(remainingMilliseconds);
    }, []);

    const logoutHandler = () => {
        setToken(null);

        setisAuth(false);

        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };
    const setAutoLogout = (milliseconds) => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };
    const handleLogin = async ({  request }) => {
        let formData = await request.formData();
        console.log(formData);
        try {
            const res = await fetch('https://witty-nightgown-tuna.cyclic.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                }),
            });

            if (res.status === 422) {
                throw new Error('Validation failed.');
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Error!');

                throw new Error('Could not authenticate you!');
            }
            const resData = await res.json();

            console.log(resData);

            setToken(resData.token);
            localStorage.setItem('token', resData.token);
            localStorage.setItem('userId', resData.userId);
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
                new Date().getTime() + remainingMilliseconds
            );
            localStorage.setItem('expiryDate', expiryDate.toISOString());
            setAutoLogout(remainingMilliseconds);
            setToken(resData.token);
            setuserId(resData.userId);
            setisAuth(true);
            
            return redirect('/');
        } catch (err) {
            console.log(err);
            return redirect('/login');
        }
    };
    const handleSingUp = async ({ request }) => {
        try {
            let formData = await request.formData();

            const res = await fetch('https://witty-nightgown-tuna.cyclic.app/auth/singup', {
                method: 'POST',
                body: formData,
            });

            const resData = await res.json();
            console.log(resData);
            return redirect('/');
        } catch (err) {
            console.log(err);
            return redirect('/singup');
        }
    };
    const boardgamesLoader = async ({ request }) => {
        let page = new URL(request.url).searchParams.get('page');
        if (!page) {
            page = 1;
        }
        const boardsPromise = fetch(
            `https://witty-nightgown-tuna.cyclic.app/boardgames/?page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal: request.signal,
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                console.log(resData);
                return resData;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
        return defer({
            boards: boardsPromise,
        });
    };

    const profileLoader = async () => {
        if (!isAuth) {
            return redirect('/');
        }
        console.log(token);
        return fetch('https://witty-nightgown-tuna.cyclic.app/profile', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                console.log(resData);
                return resData;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    };

    console.log(isAuth);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Recommendation isAuth={isAuth} onLogOut={logoutHandler} token = {token}/>,
            errorElement: <ErrorPage />,
        },
        {
            path: '/auth',
            element: <Auth />,
        },
        {
            path: '/auth/login',
            element: <Login />,
            action: handleLogin,
        },
        {
            path: '/auth/singup',
            element: <SingUp />,
            action: handleSingUp,
        },
        {
            path: '/profile',
            element: <Profile isAuth={isAuth} onLogOut={logoutHandler} token = {token}/>,
            loader: profileLoader,
            errorElement: <ErrorPage />,
        },
        {
            path: '/boardgames',
            element: <Boardgames isAuth={isAuth} onLogOut={logoutHandler} token = {token} />,
            loader: boardgamesLoader,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
