import React from "react";
import './SignUp-Successful.css';
import {Link} from "react-router-dom";

function SignUpSuccessful() {
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
                        <form className="form-box">
                            <h2 className="account-registration">Your account has been registered successfully!</h2>
                            <p className="signIn-link"><Link to="/signIn">Click here</Link> to sign in.</p>
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

export default SignUpSuccessful;
