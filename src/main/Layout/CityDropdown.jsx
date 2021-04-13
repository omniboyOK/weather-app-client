import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";

const cities = [
  { city: "Ubicacion Actual", value: "" },
  { city: "La Plata", value: "La Plata, AR" },
  { city: "Rosario", value: "Rosario, AR" },
  { city: "Bahía Blanca", value: "Bahia Blanca, AR" },
  { city: "Ushuaia", value: "Ushuaia, AR" },
  { city: "Comodoro Rivadavia", value: "Comodoro Rivadavia, AR" },
];

function CityDropdown() {
  const dispatch = useDispatch();
  const [showDropdown, setDropdownVisibility] = useState(false);
  const [selected, setSelection] = useState("Ubicación Actual");

  function handleCitySelection(item) {
    setSelection(item.city);
    dispatch({ type: "CHANGE_LOCATION", location: item.value });
    setDropdownVisibility(false);
  }

  return (
    <NavDropdown
      show={showDropdown}
      onClick={() => setDropdownVisibility(!showDropdown)}
      title={selected}
      id="basic-nav-dropdown"
    >
      {cities.map((item) => (
        <NavDropdown.Item
          value={item.value}
          name={item.city}
          onClick={() => handleCitySelection(item)}
          key={item.value}
        >
          {item.city}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default CityDropdown;
