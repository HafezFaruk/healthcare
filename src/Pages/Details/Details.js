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
            <h1>Details Page</h1>
            <img src={matchingDoctors?.img} alt="" />
            <h4>{matchingDoctors?.name}</h4>
            <h4>Meet fee: ${matchingDoctors?.price}</h4>
            <h4>{matchingDoctors?.description}</h4>
        </div>
    );
};

export default Details;