import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from "../models/User";
import { formElementHandler } from "../util/handlerFactory";
import classes from "./RegistrationForm.module.css";
import { Row, Col, Button, Form, Card } from "react-bootstrap";

const RegistrationForm: React.FC = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const firstNameHandler = formElementHandler(setFirstName);
  const lastNameHandler = formElementHandler(setLastName);
  const emailHandler = formElementHandler(setEmail);
  const passwordHandler = formElementHandler(setPassword);
  const passwordConfirmHandler = formElementHandler(setPasswordConfirm);

  const isValidEmail = (email: string) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email);
  };

  const registrationHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      return;
    }
    if (!isValidEmail(email)) {
      return;
    }
    if (password !== passwordConfirm) {
      return;
    }

    const newUser: User = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <Card className={`${classes["card"]} `}>
      <div className={`${classes["form-heading"]}`}>
        <h3>Register</h3>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                onChange={firstNameHandler}
                type="text"
                placeholder="your first name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                onChange={lastNameHandler}
                type="text"
                placeholder="your last name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={emailHandler}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={passwordHandler}
              type="text"
              placeholder="your unique username"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={passwordConfirmHandler}
              type="password"
              placeholder="password"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="confirm-password">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="confirm password" />
          </Form.Group>
        </Row>
      </Form>
      <Button
        variant="outline-dark"
        className={`${classes["button"]}`}
        type="submit"
        onSubmit={registrationHandler}
      >
        Submit
      </Button>
      <div className={`${classes["login-message"]}`}>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </Card>
  );
};

export default RegistrationForm;
