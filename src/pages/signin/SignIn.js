import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './SignIn.css';
import axios from "axios";
import Button from "../../components/button/Button";
import {useForm} from 'react-hook-form';

function SignIn() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {loginFunction} = useContext(AuthContext);

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onSubmit"});


    async function signInRequest(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: data.username,
                password: data.password,
            });
            loginFunction(response.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
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
                        <form className="form-box" onSubmit={handleSubmit(signInRequest)}>
                            <h2 className="form-title">Sign in</h2>
                            <label className="form-label" htmlFor="username-field">
                                Username
                                <input
                                    type="text"
                                    id="username-field"
                                    {...register("username", {
                                        required: "Username cannot be empty",
                                    })}
                                />
                                {errors.username && <p className="error-message">{errors.username.message}</p>}
                            </label>
                            <label className="form-label" htmlFor="password-field">
                                Password
                                <input
                                    type="password"
                                    id="password-field"
                                    {...register("password", {
                                        required: "Password cannot be empty",
                                    })}
                                />
                                {errors.password && <p className="error-message">{errors.password.message}</p>}
                            </label>
                            {error && <p className="error">Invalid username or password. Please re-enter your user
                                information.</p>}
                            {loading && <p className="error">Signing in to your account. Please wait.</p>}
                            <Button
                                type="submit"
                                className="button button--red-wide"
                            >
                                Sign in
                            </Button>
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