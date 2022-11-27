import React from "react";
import './SignUp.css';
import { Link } from 'react-router-dom';


function SignUp() {

    function handleSubmit(e) {
        e.preventDefault();
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
                            <button className="form-button" type="submit">Sign up</button>
                            <p className="signup-link"> <Link to="/signin">Already have an account?</Link></p>
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