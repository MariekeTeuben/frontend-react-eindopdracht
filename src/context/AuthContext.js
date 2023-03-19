import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";
import spinner from '../assets/loading.gif';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== undefined && (token)) {
            const decodedToken = jwtDecode(token);
            fetchUserData(token, decodedToken);
        } else {
            setAuth({
                ...isAuth,
                status: 'done',
            });
        }
    }, []);

    async function fetchUserData(token, decodedToken) {
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

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
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);

        fetchUserData(token, decodedToken.sub).then(r => history.push('/allParks'));
    }

    function logout() {
        setAuth({
            ...isAuth,
            isAuth: false,
            user: null,
        });

        localStorage.clear();
        history.push('/signIn');
    }

    const contextData = {
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