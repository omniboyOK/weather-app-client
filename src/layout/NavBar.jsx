import React from "react";
import { Navbar, Container } from "react-bootstrap";
import CityDropdown from "./CityDropdown";
import { useSelector } from "react-redux";

function NavBar() {
  const city = useSelector((state) => state.city);

  return (
    <Navbar bg="primary" expand="sm">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Tu Clima
        </Navbar.Brand>
        <CityDropdown />
        <Navbar.Text style={{ color: "white" }}>
          {city || "Ubicación actual"}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBar;
