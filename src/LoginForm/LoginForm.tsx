import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./LoginForm.module.css";
import {
  Row,
  Col,
  Container,
  Button,
  Alert,
  Form,
  Card,
} from "react-bootstrap";

const LoginForm: React.FC = (props) => {
  return (
    <Card className={`${classes["card"]} `}>
      <div className={`${classes["form-heading"]}`}>
        <h3>Login</h3>
      </div>
      <Form>
        <Row>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Row>
      </Form>
      <Button variant="outline-dark" className={`${classes["button"]}`}>
        Submit
      </Button>
      <div className={`${classes["login-message"]}`}>
        <p>
          Forgot your password? <a href="#">Reset</a>
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;
