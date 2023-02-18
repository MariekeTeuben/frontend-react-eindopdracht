import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";
import spinner from '../assets/loading.gif';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setAuth] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        console.log('De context is zojuist opnieuw opgestart!');

        const token = localStorage.getItem('token');

        if (token !== undefined && (token)) {
            console.log("Stiekem toch hier..");
            const decodedToken = jwtDecode(token);
            fetchUserData(token, decodedToken);
            console.log("Token: " + decodedToken);
        } else {
            setAuth({
                ...isAuth,
                status: 'done',
            });
        }
    }, []);

    async function fetchUserData(token, decodedToken) {
        console.log("Fetching user data...");
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

            console.log(response.data);

            setAuth({
                ...isAuth,
                isAuth: true,
                status: 'done',
                user: {
                    email: response.data.email,
                    id: response.data.id,
                },
            })
        } catch (e) {
            setAuth({
                ...isAuth,
                status: 'done',
            });
            console.error(e);
            localStorage.clear();
        }
    }

    const history = useHistory();

    function login(token) {
            console.log("Login token: " + token);
            localStorage.setItem('token', token);
            const decodedToken = jwtDecode(token);
            console.log('decoded token:', decodedToken);

            fetchUserData(token, decodedToken.sub).then(r => history.push('/browse') );

            console.log("Gebruiker is ingelogd");
    }

    function logout() {
        console.log("Logging out...");
        setAuth( {
            ...isAuth,
            isAuth: false,
            user: null,
        });

        localStorage.clear();
        console.log('Gebruiker is uitgelogd');
        history.push('/signIn');
    }

    const contextData = {
        banaan: 'geel',
        isAuthenticated: isAuth.isAuth,
        userDetails: isAuth.user,
        loginFunction: login,
        logoutFunction: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <img src={spinner} alt="Spinner"/>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;