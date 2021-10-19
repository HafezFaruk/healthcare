import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { detailsId } = useParams();
    // const {doctors} = useAuth();
    const {services} = useAuth();
    console.log(services);

    const matchingDoctors = services?.find((doctors) => (doctors.id) === Number(detailsId));
    console.log(matchingDoctors);
    return (
        <div>
            <h1>This is Details: {detailsId} </h1>
            <img src={matchingDoctors?.img} alt="" />
            <h1>Price:{matchingDoctors?.price}$</h1>
        </div>
    );
};

export default Details;