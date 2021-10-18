import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="py-5">

            <Link to="/">
                <button className="btn btn-success ">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;