import React from "react";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function Footer() {
  return (
    <Navbar bg="dark" size="xl">
      <Container>
        <Navbar.Brand href="#home">OmniboyOK - Github</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
