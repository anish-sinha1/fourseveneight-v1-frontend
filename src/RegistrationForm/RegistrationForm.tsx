import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { formElementHandler } from "../util/handlerFactory";
import classes from "./RegistrationForm.module.css";
import { Row, Col, Button, Form, Card } from "react-bootstrap";

const RegistrationForm: React.FC = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const firstNameHandler = formElementHandler(setFirstName);
  const lastNameHandler = formElementHandler(setLastName);
  const emailHandler = formElementHandler(setEmail);
  const usernameHandler = formElementHandler(setUsername);
  const passwordHandler = formElementHandler(setPassword);
  const passwordConfirmHandler = formElementHandler(setPasswordConfirm);

  const isValidEmail = (email: string) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email);
  };

  const registrationHandler = (event: React.SyntheticEvent) => {
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

    const newUser: object = {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
    };

    axios
      .post(`http://localhost:8000/api/v1/users/register`, newUser)
      .then((res) => {
        console.log("successful post request to api");
      })
      .catch((err) => {
        console.log(err);
      });
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
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
                value={firstName}
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
                value={lastName}
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
              value={email}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={usernameHandler}
              type="text"
              placeholder="your unique username"
              value={username}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={passwordHandler}
              type="password"
              placeholder="password"
              value={password}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="confirm-password">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              onChange={passwordConfirmHandler}
              type="password"
              placeholder="confirm password"
              value={passwordConfirm}
            />
          </Form.Group>
        </Row>
      </Form>
      <Button
        variant="outline-dark"
        className={`${classes["button"]}`}
        type="submit"
        onClick={registrationHandler}
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
