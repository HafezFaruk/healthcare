import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const {services} = useServices();
    const allContext = useFirebase();
    const alldata = {services, allContext}
    return (
        <AuthContext.Provider value={alldata}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;