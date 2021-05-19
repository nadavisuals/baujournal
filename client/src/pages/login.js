import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
  
  const Login = () => {
  
    return (
      <div>
      <div className="conatiner">
        <Form
          style={{
            maxWidth: "400px",
            marginTop: "120px",
            backgroundColor: " #737373",
            padding: "50px",
          }}
          className="text-center container"
        >
          <Form.Group>
            <h1>PITBAUjOURNAL</h1>
    
          </Form.Group>
          <Form.Group>
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>
          <Link
              to={
                "/day-choose-project"
              }
            >
              <Button variant="dark">Login</Button>
            </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;