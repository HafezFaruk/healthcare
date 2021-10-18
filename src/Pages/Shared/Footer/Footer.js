import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/icon/light-logo.png'
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-primary text-white p-5 text-start">
            <Container>
                <Row>
                    <Col>
                        <img src={logo} alt="logo" />
                        <p className="pt-4">Regular checkups help in detection of early warning signs of certain health related issues. Visit to us regularly and make your kids to stay in healthy.</p>
                        <h4 className="py-3">STAY CONNECTED</h4>
                        <span className="fs-2"><FaFacebookF /></span>
                        <span className="mx-3 fs-2"><FaTelegramPlane /></span>
                        <span className="fs-2"><FaTwitter /></span>
                    </Col>
                    <Col>
                        <h5>Useful Links</h5>
                        <Row> 
                            <Col>
                                <Link className="d-block pt-3 text-white">Home</Link>
                                <Link className="d-block pt-3 text-white">News</Link>
                                <Link className="d-block pt-3 text-white">About us</Link>
                                <Link className="d-block pt-3 text-white">Services</Link>
                                <Link className="d-block pt-3 text-white">Appointments</Link>
                            </Col>
                            <Col><Link className="d-block pt-3 text-white">Contact us</Link>
                                <Link className="d-block pt-3 text-white">Legal Support</Link>
                                <Link className="d-block pt-3 text-white">Give us feedback</Link>
                                <Link className="d-block pt-3 text-white">Talk to us</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;