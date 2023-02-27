import React, {useState, useRef} from "react";
import './SignUp.css';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import Button from "../../components/button/Button";
import {useForm} from 'react-hook-form';

function SignUp() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: "onChange"});
    const password = useRef({});
    password.current = watch("password", "");


    async function onFormSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"],
            });
            console.log(response);
            history.push('/signup-successful');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
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
                        <form className="form-box" onSubmit={handleSubmit(onFormSubmit)}>
                            <h2 className="form-title">Sign up</h2>

                            <label className="form-label" htmlFor="username-field">
                                Username
                                <input
                                    type="text"
                                    id="username-field"
                                    {...register("username", {
                                        required: "Username cannot be empty",
                                        minLength: {value: 6, message: "Minimum amount of characters is 6"}
                                    })}
                                />
                                {errors.username && <p className="error-message">{errors.username.message}</p>}
                            </label>
                            <label className="form-label" htmlFor="email-field">
                                Email address
                                <input
                                    type="email"
                                    id="email-field"
                                    {...register("email", {
                                        required: "Email cannot be empty",
                                        validate: (value) => value.includes('@') || 'Please include an @ in the email address'
                                    })}
                                />
                                {errors.email && <p className="error-message">{errors.email.message}</p>}
                            </label>
                            <label className="form-label" htmlFor="password-field">
                                Password
                                <input
                                    type="password"
                                    id="password-field"
                                    {...register("password", {
                                        required: "Password cannot be empty",
                                        minLength: {value: 6, message: "Minimum amount of characters is 6"}
                                    })}
                                />
                                {errors.password && <p className="error-message">{errors.password.message}</p>}
                            </label>
                            <label className="form-label" htmlFor="confirm-password-field">
                                Confirm Password
                                <input
                                    type="password"
                                    id="confirm-password-field"
                                    {...register("confirmPassWord", {
                                        required: "Confirm password cannot be empty",
                                        validate: (value) => value === password.current || "The passwords do not match"
                                    })}
                                />
                                {errors.confirmPassWord &&
                                    <p className="error-message">{errors.confirmPassWord.message}</p>}
                            </label>
                            {error && <p className="account-message">This account already exists. Please log in.</p>}
                            {loading && <p className="account-message">Registering your account. Please wait.</p>}
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