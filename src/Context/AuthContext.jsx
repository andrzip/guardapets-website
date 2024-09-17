import React, { createContext, useState, useEffect } from 'react';
import { Api } from '../Services/ApiConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await Api.get('/users/verify-token', { withCredentials: true });
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.log('Usuário não autenticado:', error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    const login = (user_id) => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
