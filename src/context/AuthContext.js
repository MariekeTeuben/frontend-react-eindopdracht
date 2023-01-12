import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState( {
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function login() {
        toggleAuth( {
            ...auth,
            isAuth: true,
            // user moet ook gevuld worden
        });
        history.push('/browse');
    }

    function logout() {
        toggleAuth( {
            ...auth,
            isAuth: false,
            user: null,
        });
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