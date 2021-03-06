import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const {id, name, price, description, img } = service;
    return (
        <div id="services" className="service pb-4">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Meet Fee ${price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-primary">VIEW DETAILS</button>
            </Link>
        </div>
    );
};

export default Service;