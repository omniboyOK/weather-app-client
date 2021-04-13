import React from "react";
import { Navbar, Container } from "react-bootstrap";
import CityDropdown from "./CityDropdown";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function NavBar() {
  const location = useSelector((state) => state.location);
  const city = useSelector((state) => state.city);

  return (
    <Navbar bg="primary" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Tu Clima</Navbar.Brand>
        <CityDropdown></CityDropdown>
        <Navbar.Text>{city || "Ubicación actual"}</Navbar.Text>
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
