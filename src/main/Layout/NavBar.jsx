import React from "react";
import { Navbar, Container } from "react-bootstrap";
import CityDropdown from "./CityDropdown";
import { useSelector } from "react-redux";

function NavBar() {
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

export default NavBar;
