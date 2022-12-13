import React, { useState } from "react";
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from "axios";


function SignUp() {
    const [userName, setUserName] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');

    async function handleSubmit() {
        if (passWord===confirmPassWord) {
            try {
                const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    "username": {userName},
                    "email" : {emailValue},
                    "password" : {passWord},
                    "role": ["user"]
                });
                console.log(response);

            } catch (e) {
                console.error(e);
            }
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
                        <form className="form-box" onSubmit={handleSubmit}>
                            <h2 className="form-title">Sign up</h2>
                            <label className="form-label" htmlFor="username">
                                Username
                                <input className="form-input"
                                       type="text"
                                       value={userName}
                                       onChange={(e) => setUserName(e.target.value)}
                                />
                            </label>
                            <label className="form-label" htmlFor="emailaddress">
                                Emailaddress
                                <input className="form-input"
                                       type="email"
                                       value={emailValue}
                                       onChange={(e) => setEmailValue(e.target.value)}
                                />
                            </label>
                            <label className="form-label" htmlFor="password">
                                Password
                                <input className="form-input"
                                       type="password"
                                       value={passWord}
                                       onChange={(e) => setPassWord(e.target.value)}
                                />
                            </label>
                            <label className="form-label" htmlFor="confirm password">
                                Confirm Password
                                <input className="form-input"
                                       type="password"
                                       value={confirmPassWord}
                                       onChange={(e) => setConfirmPassWord(e.target.value)}
                                />
                            </label>
                            <button className="form-button" type="submit">Sign up</button>
                            <p className="signup-link">Already have an account? <Link to="/signin">Click here</Link></p>
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