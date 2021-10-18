import React from 'react';

import img1 from '../../../images/mechanic/img-5.jpg';
import img2 from '../../../images/mechanic/img-5.jpg';
import img3 from '../../../images/mechanic/img-5.jpg';

import Expert from '../Expert/Expert';

const experts = [
    {
        img: img1,
        name: 'Operation Theatre Room',
    },
    {
        img: img2,
        name: 'John Anderson',
    },
    {
        img: img3,
        name: 'Zakaria Smith',
    },
    
]

const Experts = () => {
    return (
        <div id="expert">
            <h2 className="text-primary mt-5">Our Equipments</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;