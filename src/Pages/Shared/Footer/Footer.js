import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/icon/light-logo.png';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-primary text-white p-5 text-start mt-5">
            <Container>
                <Row>
                    <Col>
                        <img className="logo" src={logo} alt="logo" />
                        <p className="pt-4">Regular checkups help in detection of early warning signs of certain health related issues. Visit to us regularly and make your kids to stay in healthy.</p>
                        <h4 className="py-3">STAY CONNECTED</h4>
                        <span className="fs-2"><FaFacebookF /></span>
                        <span className="mx-3 fs-2"><FaTelegramPlane /></span>
                        <span className="fs-2"><FaTwitter /></span>
                    </Col>
                    <Col>
                        <h5>Useful lis</h5>
                        <Row className="footer-li"> 
                            <Col>
                                <li className="d-block pt-3 text-white">Home</li>
                                <li className="d-block pt-3 text-white">News</li>
                                <li className="d-block pt-3 text-white">About us</li>
                                <li className="d-block pt-3 text-white">Services</li>
                                <li className="d-block pt-3 text-white">Appointments</li>
                            </Col>
                            <Col>
                                <li className="d-block pt-3 text-white">Contact us</li>
                                <li className="d-block pt-3 text-white">Legal Support</li>
                                <li className="d-block pt-3 text-white">Give us feedback</li>
                                <li className="d-block pt-3 text-white">Talk to us</li>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;