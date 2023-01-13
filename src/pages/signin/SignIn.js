import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './SignIn.css';
import axios from "axios";



function SignIn() {
    const { auth, login} = useContext(AuthContext);

    async function handleSubmit() {
        try {
            // 1. Het endpoint wordt: https://frontend-educational-backend.herokuapp.com/api/auth/signin
            // 2. Inloggen met de keys 'username' en 'password'
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: '',
                password: '',
            });

            console.log(response.data.accessToken);
            login(response.data.accessToken);


        } catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <header className="header-signin">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                    </div>
                </section>
            </header>
            <main>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <form className="form-box" onSubmit={handleSubmit}>
                            <h2 className="form-title">Sign in</h2>
                            <label className="form-label" htmlFor="username">
                                Username
                                <input className="form-input"
                                       type="text"
                                       id="username"
                                       name="email"
                                />
                            </label>
                            <label className="form-label" htmlFor="password">
                                Password
                                <input className="form-input"
                                       type="text"
                                       id="password"
                                       name="password"
                                />
                            </label>
                            <button className="form-button" type="submit">Sign in</button>
                            <p className="signup-link"><Link to="/signup">New to NPS? Sign up now</Link></p>
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

export default SignIn;