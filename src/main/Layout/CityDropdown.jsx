import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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
  const city = useSelector((state) => state.city);

  function handleCitySelection(item) {
    dispatch({ type: "CHANGE_CITY", city: item.city });
    dispatch({ type: "CHANGE_LOCATION", location: item.value });
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>{city}</Dropdown.Toggle>
      <Dropdown.Menu>
        {cities.map((item) => (
          <Dropdown.Item
            value={item.value}
            name={item.city}
            onClick={() => handleCitySelection(item)}
            key={item.value}
          >
            {item.city}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CityDropdown;
