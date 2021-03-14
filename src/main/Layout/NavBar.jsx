import React, { useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const cities = [
  { city: "Ubicacion Actual", value: "" },
  { city: "La Plata", value: "La Plata, AR" },
  { city: "Rosario", value: "Rosario, AR" },
  { city: "Bahía Blanca", value: "Bahía Blanca, AR" },
  { city: "Ushuaia", value: "Ushuaia, AR" },
  { city: "Comodoro Rivadavia", value: "Comodoro Rivadavia, AR" },
];

function NavBar() {
  const [showDropdown, setDropdownVisibility] = useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Weather App</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            show={showDropdown}
            onClick={() => setDropdownVisibility(!showDropdown)}
            title="Elegir Ciudad"
            id="basic-nav-dropdown"
          >
            {cities.map((item) => (
              <NavDropdown.Item onClick={() => setDropdownVisibility(false)}>
                {item.city}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
