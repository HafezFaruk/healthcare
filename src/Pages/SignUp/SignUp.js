import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  // faLink,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { allContext } = useAuth();
  const { handleName,
    handelPass,
    handelEmail,
    registerProcess,
    signInUsingGoogle,
    isLogin,
    toggleLogin,
    error } = allContext;
  return (
    <div className="text-center my-4">
      <h2>Please {isLogin ? "Login"  :  "Sign Up"}</h2>
      <p className=" mt-2">Sign Up with Email & Password</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={registerProcess}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  onBlur={handleName}
                  type="text"
                  autoComplete="current-name"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  onBlur={handelEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  required
                  onBlur={handelPass}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
            <div class="form-check">
              <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Email and Password
            </button>
          </Row>
          <button onClick={signInUsingGoogle} type="submit" className="btn btn-primary mt-2 w-100">
            {isLogin ? "Google SignUp" : "Google Login"}
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          Already have an account? Please login!
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
