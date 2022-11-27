import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './Signin.css';


function SignIn() {

    function handleSubmit(e) {
        e.preventDefault();
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
                            <label className="form-label" htmlFor="emailaddress">
                                Emailaddress
                                <input className="form-input"
                                    type="text"
                                    id="emailaddress"
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
                            <p className="signup-link"> <Link to="/signup">New to NPS? Sign up now</Link></p>
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