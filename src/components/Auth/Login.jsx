import { useState } from 'react';
import './AuthForm.scss';
import Logo from '../../assets/Logo.png';
import Navigation from '../Navigation/Navigation';
import { Form } from 'react-router-dom';
const Login = (props) => {
    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    // login


    return (
        <>
         <Navigation/>
        <div className="form-container">
            
            <div className="form-container__logo">
                <img
                    className="form-container__logo--image"
                    src={Logo}
                />
            </div>

            <Form
                method='post'
                action='/auth/login'

                className="form-container__form"
            >
                <div>
                    <input
                    name='email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                        className="form-control"
                    />
                </div>
                <div>
                    <input
                    name='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className="form-control"
                    />
                </div>
                <button
                    type="submit"
                    className="form-container__form--button"
                >
                    {"LOGIN"}
                </button>
            </Form>
        </div>
        </>
    );
};

export default Login;
