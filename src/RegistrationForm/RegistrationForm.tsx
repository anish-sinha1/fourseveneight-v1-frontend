import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./RegistrationForm.module.css";
import {
  Row,
  Col,
  Container,
  Button,
  Alert,
  Form,
  Card,
} from "react-bootstrap";

const RegistrationForm: React.FC = (props) => {
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
              <Form.Control type="text" placeholder="your first name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="your last name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="confirm-password">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="confirm password" />
          </Form.Group>
        </Row>
      </Form>
      <Button variant="outline-dark" className={`${classes["button"]}`}>
        Submit
      </Button>
    </Card>
  );
};

export default RegistrationForm;
