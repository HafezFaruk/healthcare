import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="py-5 mx-auto">
            <h1>Not Found Page</h1>
            <h1>404</h1>
            <Link to="/">
                <button className="btn btn-danger">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;