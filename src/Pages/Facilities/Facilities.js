import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../../images/facilities/1.jpg';
import Image2 from '../../images/facilities/2.jpg';
import Image3 from '../../images/facilities/3.jpg';
import Image5 from '../../images/facilities/5.jpg';
import Image6 from '../../images/facilities/6.jpg';
import Image7 from '../../images/facilities/7.jpg';
import Image8 from '../../images/facilities/8.jpg';
import Image9 from '../../images/facilities/9.jpg';

const Facilities = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                <img src={Image2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Baby girls section</h5>
                    <p className="card-text">In this department research and treatment of baby girls is given</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={Image3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Baby boys section</h5>
                    <p className="card-text">This is because in our baby boys section only baby boys are treated</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={Image9} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Department of Neonatal Pediatrics</h5>
                    <p className="card-text">This section covers the treatment of newborns as well as female doctors for their care</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={Image1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Pediatric asthma department</h5>
                    <p className="card-text">In this section treatment of all diseases like cold, diarrhea, cholera and asthma in children</p>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Facilities;