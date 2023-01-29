import React, { useState } from "react";
import './SignUp.css';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import {ImInfo} from "react-icons/im";


function SignUp() {
    const [userName, setUserName] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        if (passWord === confirmPassWord) {
            e.preventDefault();
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    username: userName,
                    email: emailValue,
                    password: passWord,
                    role: ["user"],
                });
                console.log(response);
                history.push('/signIn');
            } catch (e) {
                console.error(e);
                toggleError(true);
            }

            toggleLoading(false);
        }
    }

        return (
            <>
                <header className="header-signup">
                    <section className="outer-content-container">
                        <div className="inner-content-container">
                        </div>
                    </section>
                </header>
                <main>
                    <section className="outer-content-container">
                        <div className="inner-content-container">
                            <form className="form-box" onSubmit={handleSubmit} >
                                <h2 className="form-title">Sign up</h2>
                                <label className="form-label" htmlFor="username-field">
                                    Username <ImInfo />
                                    <input className="form-input"
                                           type="text"
                                           id="username-field"
                                           value={userName}
                                           onChange={(e) => setUserName(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="email-field">
                                    Email address
                                    <input className="form-input"
                                           type="email"
                                           id="email-field"
                                           value={emailValue}
                                           onChange={(e) => setEmailValue(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="password-field">
                                    Password <ImInfo />
                                    <input className="form-input"
                                           type="password"
                                           id="password-field"
                                           value={passWord}
                                           onChange={(e) => setPassWord(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="confirm-password-field">
                                    Confirm Password
                                    <input className="form-input"
                                           type="password"
                                           id="confirm-password-field"
                                           value={confirmPassWord}
                                           onChange={(e) => setConfirmPassWord(e.target.value)}
                                    />
                                </label>
                                {error && <p className="error">This account already exists. Please try a different email address to register.</p>}
                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={loading}
                                >
                                    Sign up
                                </button>

                                <p className="signup-link">Already have an account? <Link to="/signIn">Click here</Link>
                                </p>
                            </form>
                        </div>
                    </section>
                </main>
                <footer className="outer-content-container">
                    <div className="inner-content-container">
                    </div>
                </footer>
            </>
        );
    }


export default SignUp;