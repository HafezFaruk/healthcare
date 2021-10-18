import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {DetailsId} = useParams();
    return (
        <div>
            {/* <h1>This is Details: {DetailsId} </h1> */}
            <h1>This is Details: {DetailsId} </h1>
        </div>
    );
};

export default Details;