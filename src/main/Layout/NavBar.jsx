import React from "react";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function NavBar({ location }) {
  return (
    <Navbar bg="primary" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Tu Clima</Navbar.Brand>
        {location && <Navbar.Text>{location}</Navbar.Text>}
      </Container>
    </Navbar>
  );
}

NavBar.prototype = {
  location: PropTypes.string,
};

NavBar.defaultProps = {
  location: "",
};

export default NavBar;
