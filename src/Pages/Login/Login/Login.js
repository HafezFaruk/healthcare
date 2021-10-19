import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="py-5">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;