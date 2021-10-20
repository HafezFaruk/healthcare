import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/icon/logo.png'

const Header = () => {
    // const { user, logOut } = useAuth();
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <>
            <Container className="py-3 ">
                <Row md="4" sm="12" className="text-center">
                    <Col sm="12">
                        <img src={logo} alt="" />
                    </Col>
                    <Col sm="12">
                        <h6>OUR OFFICE</h6>
                        <p>232 Dhaka</p>
                        <p>Bangladesh</p>
                    </Col>
                    <Col sm="12">
                        <h6>MAIL US</h6>
                        <p>info@pediatrics.com</p>
                        <p>help@pediatrics.com</p>
                    </Col>
                    <Col sm="12">
                        <h6>CALL US</h6>
                        <p>900-344-1147</p>
                        <p>132-332-4476</p>
                    </Col>
                    
                </Row>
            </Container>
            <Navbar className="bg-primary" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="text-center">
                            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/equipment">Equipments</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/facilities">Facilities</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/contact">Contact</Nav.Link>

                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button>
                                : <>
                                    <Nav.Link as={Link} to="/signup" className="text-white">
                                        Sign Up
                                    </Nav.Link>
                                    <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                                </>


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