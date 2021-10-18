import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Register = () => {
    const formStyle = { background: "transparent", color: "black" };

  return (
    <div className="register" style={{ padding: "58px 0 40px" }}>
        <h2 className="text-center">Register From</h2>
        <p className="text-center text-muted mb-4">
          You can easily reach us through filling up the form
        </p>
     
      <div>
        <Container>
          
            <Form>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Your Problem</Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Problem"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Doctor Name </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Doctor Name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group
                className="mb-3 text-white"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Messages</Form.Label>
                <Form.Control
                  style={formStyle}
                  placeholder="Write you message..."
                  as="textarea"
                  rows={6}
                />
              </Form.Group>
              <Button className="mb-5 px-4" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
         
        </Container>
      </div>
    </div>
  );
}

export default Register;