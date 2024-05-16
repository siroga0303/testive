import { useState } from 'react';
import './AuthForm.scss';
import Logo from '../../assets/Logo.png';
import Navigation from '../Navigation/Navigation';
import { Form } from 'react-router-dom';
const SingUp = (props) => {
    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    // login

    return (
        <>
            <Navigation />
            <div className="form-container">
                <div className="form-container__logo">
                    <img
                        className="form-container__logo--image"
                        src={Logo}
                    />
                </div>

                <Form
                    method="post"
                    encType="multipart/form-data"
                    action="/auth/singup"
                    className="form-container__form"
                >
                    <label htmlFor="avatar">Choose a profile picture:</label>
                    <div>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                        />
                    </div>
                    <div>
                        <input
                            name="userName"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            placeholder="Enter Username"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <input
                            name="email"
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
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                            className="form-control"
                            minLength={8}
                            maxLength={128}
                        />
                    </div>

                    <button
                        type="submit"
                        className="form-container__form--button"
                    >
                        {'SingUp'}
                    </button>
                </Form>
            </div>
        </>
    );
};

export default SingUp;
