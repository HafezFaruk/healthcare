import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image2 from '../../images/facilities/2.jpg';
import Image3 from '../../images/facilities/3.jpg';
import Image5 from '../../images/facilities/5.jpg';
import Image6 from '../../images/facilities/6.jpg';
import Image7 from '../../images/facilities/7.jpg';
import Image8 from '../../images/facilities/8.jpg';

const Facilities = () => {
    return (
        <div>
            <Container>
                <Row md="2" sm="1" lg="2" className="text-start">
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image8} alt="" />
                        <h1>Pediatric treatment on our website and all children are treated with you</h1>
                    </Col>
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image2} alt="" />
                        <h1>All services are provided at low cost</h1>
                    </Col>
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image3} alt="" />
                        <h1>Poor children are given free treatment</h1>
                    </Col>
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image7} alt="" />
                        <h1>None of the helpless poor women are given free treatment to pregnant women</h1>
                    </Col>
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image5} alt="" />
                        <h1>With the treatment of old man, poor old man are provided free accommodation</h1>
                    </Col>
                    <Col children="border border-4 my-4">
                        <img className="img-fluid" src={Image6} alt="" />
                        <h1>With the treatment of children, poor children are provided free accommodation{`.slice(0,20)`}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Facilities;