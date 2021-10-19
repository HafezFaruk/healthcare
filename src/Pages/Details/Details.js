import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { DetailsId } = useParams();
    const {doctors} = useAuth();
    console.log(doctors);

    const matchingDoctors = doctors?.find((doctors) => Number(doctors.id) === Number(DetailsId));
    console.log(matchingDoctors);
    return (
        <div>
            <h1>This is Details: {DetailsId} </h1>
            <img src={matchingDoctors?.img} alt="" />
            <h1>Price:{matchingDoctors?.price}$</h1>
        </div>
    );
};

export default Details;