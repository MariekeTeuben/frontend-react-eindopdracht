import React, {createContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState( {
        isAuth: false,
        user: null,
    });

    const history = useHistory();

    function login(token) {
        console.log(token);

        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        console.log('decoded token:', decodedToken);

        toggleAuth( {
            ...auth,
            isAuth: true,
            user: {
                username: decodedToken.sub
            }
        });
        console.log('Gebruiker is ingelogd');
        history.push('/browse');
    }

    function logout() {
        toggleAuth( {
            ...auth,
            isAuth: false,
            user: null,
        });
        localStorage.clear();
        history.push('/');
    }

    const contextData = {
        auth: auth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;