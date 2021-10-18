import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/icon/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Container className="py-3 ">
                <Row>
                    <Col md="3">
                        <img src={logo} alt="" />
                    </Col>
                    <Col md="9">
                        <Row>
                            <Col>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <h6>OUR OFFICE</h6>
                                        <p>232 Dhaka</p>
                                        <p>Bangladesh</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <h6>MAIL US</h6>
                                        <p>info@pediatrics.com</p>
                                        <p>help@pediatrics.com</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <h6>CALL US</h6>
                                        <p>900-344-1147</p>
                                        <p>132-332-4476</p>
                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
            <Navbar className="bg-primary" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="text-center">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#expert">Expert</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button>
                                : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

/*
<>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/home#expert">Expert</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </Navbar>
        </>
*/