import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './SignIn.css';
import axios from "axios";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });

            console.log(response.data.accessToken);
            login(response.data.accessToken);


        } catch(e) {
            console.error(e);
            toggleError(true);
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
                            <label className="form-label" htmlFor="username-field">
                                Username
                                <input
                                    className="form-input"
                                    type="text"
                                    id="username-field"
                                    name="email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            <label className="form-label" htmlFor="password-field">
                                Password
                                <input
                                    className="form-input"
                                    type="text"
                                    id="password-field"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            {error && <p className="error">Invalid username or password. Please re-enter your user information.</p>}

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