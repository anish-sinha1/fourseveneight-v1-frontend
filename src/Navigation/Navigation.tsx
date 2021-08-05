import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
const Navigation: React.FC = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">FourSevenEight</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
