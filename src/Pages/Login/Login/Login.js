import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {useHistory, useLocation} from 'react-router-dom';


const Login = () => {
 /*  const history= useHistory()
  const location = useLocation() 
  const redirect_url = location?.state?.from || '/home' */
  const { allContext} = useAuth();
  
 const  { signInUsingGoogle,handelPass,
  handelEmail,loginProcess, setIsLoading,
        setUser } = allContext
          const history= useHistory()
  const location = useLocation() 
  const redirect_url = location?.state?.from || '/home'
const heandleGoogle = () => {
  signInUsingGoogle()
    .then(result =>{
            setUser(result.user);
            history.push(redirect_url)
        })
        .finally(() => setIsLoading(false));
}
 
  return (
    <div className="py-5">
      <h2>Please Login</h2>
      <div className="w-25 mx-auto">
        <Form onSubmit={loginProcess}>
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
                    onBlur={handelPass}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>
          <button type="submit" className="btn btn-primary mt-2 w-100">
            Email and Password
          </button>
        </Form>
        <button onClick={heandleGoogle} type="submit" className="btn btn-primary mt-2 w-100">
          Google
        </button>
      </div>
    </div>
  )
};

export default Login;