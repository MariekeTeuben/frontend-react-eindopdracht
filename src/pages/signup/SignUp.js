import React, { useState } from "react";
import './SignUp.css';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import {ImInfo} from "react-icons/im";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";


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
                                    <Input
                                       type="text"
                                       id="username-field"
                                       value={userName}
                                       changeHandler={(e) => setUserName(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="email-field">
                                    Email address
                                    <Input
                                       type="email"
                                       id="email-field"
                                       value={emailValue}
                                       changeHandler={(e) => setEmailValue(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="password-field">
                                    Password <ImInfo />
                                    <Input
                                       type="password"
                                       id="password-field"
                                       value={passWord}
                                       changeHandler={(e) => setPassWord(e.target.value)}
                                    />
                                </label>

                                <label className="form-label" htmlFor="confirm-password-field">
                                    Confirm Password
                                    <Input
                                       type="password"
                                       id="confirm-password-field"
                                       value={confirmPassWord}
                                       changeHandler={(e) => setConfirmPassWord(e.target.value)}
                                    />
                                </label>
                                {error && <p className="error">This account already exists. Please try a different email address to register.</p>}
                                <Button
                                    type="submit"
                                    className="button button--red-wide"
                                    disabled={loading}
                                >
                                    Sign up
                                </Button>

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