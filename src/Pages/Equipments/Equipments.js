import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Equipments.css'
import img1 from '../../images/equipments/img1.jpg';
import img2 from '../../images/equipments/img2.jpg';
import img3 from '../../images/equipments/img3.jpg';
import img4 from '../../images/equipments/img4.jpg';
import img5 from '../../images/equipments/img5.jpg';
import img6 from '../../images/equipments/img8.jpg';
const Equipments = () => {
    return (
        <div>
            <h1>Our Equipments</h1>
            <Row md="3" sm="1">
                <Col >
                    <img className="img-fluid my-3" src={img1} alt="Equipments" />
                </Col>
                <Col>
                    <img className="img-fluid my-3" src={img2} alt="Equipments" />
                </Col>
                <Col>
                    <img className="img-fluid my-3" src={img3} alt="Equipments" />

                </Col>
                <Col>
                    <img className="img-fluid my-3" src={img4} alt="Equipments" />
                </Col>
                <Col>
                    <img className="img-fluid my-3" src={img5} alt="Equipments" />
                </Col>
                <Col>
                    <img className="img-fluid my-3" src={img6} alt="Equipments" />
                </Col>
            </Row>
        </div>
    );
};

export default Equipments;