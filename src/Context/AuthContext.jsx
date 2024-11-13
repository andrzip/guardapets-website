import React, { createContext, useState, useEffect } from 'react';
import { Api } from '../Services/ApiConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; // Controle para evitar update de estado após unmount

        const checkAuth = async () => {
            try {
                const { status } = await Api.get('/users/verify-token', { withCredentials: true });
                if (isMounted) setIsAuthenticated(status === 200);
            } catch (error) {
                console.log('Usuário não autenticado:', error);
                if (isMounted) setIsAuthenticated(false);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        checkAuth();

        return () => {
            isMounted = false; // Cleanup do efeito
        };
    }, []);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
