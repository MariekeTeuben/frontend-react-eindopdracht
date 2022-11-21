import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';


function Signin() {

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
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="emailaddress">
                                Emailaddress
                                <input
                                    type="text"
                                    id="emailaddress"
                                    name="email"
                                    placeholder="Typ hier je emailadres"
                                />
                            </label>
                            <label htmlFor="password">
                                Password
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    placeholder="Typ hier je wachtwoord"
                                />
                            </label>

                            <button type="submit">Inloggen</button>
                            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Signin;