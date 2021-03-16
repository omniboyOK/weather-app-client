import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, NavDropdown, Nav } from "react-bootstrap";
import Forecast from "../Forecast/ForecastList";
import WeatherCard from "../WeatherCard/WeatherCard";

const cities = [
  { city: "Ubicacion Actual", value: "" },
  { city: "La Plata", value: "La Plata, AR" },
  { city: "Rosario", value: "Rosario, AR" },
  { city: "Bahía Blanca", value: "Bahia Blanca, AR" },
  { city: "Ushuaia", value: "Ushuaia, AR" },
  { city: "Comodoro Rivadavia", value: "Comodoro Rivadavia, AR" },
];

function Weather({ city }) {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [showDropdown, setDropdownVisibility] = useState(false);
  const [location, setLocation] = useState(null);
  const [selected, setSelection] = useState("Ubicación Actual");
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      setLoading(true);

      const getWeather = (location) => {
        axios
          .get("/v1/current/" + location)
          .then((response) => {
            setCurrent(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const getForecast = (location) => {
        axios
          .get("/v1/forecast/" + location)
          .then((response) => {
            let { list } = response.data;
            setForecast(list);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      getWeather(location || city);
      getForecast(location || city);
    },
    [city, location]
  );

  function handleCitySelection(item) {
    setSelection(item.city);
    setLocation(item.value);
    setDropdownVisibility(false);
  }

  return (
    <Row className="justify-content-md-center">
      <Col fluid="true">
        <Nav className="mr-auto">
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
        </Nav>
        <WeatherCard
          title={location}
          main={current.main}
          weather={current.weather}
          loading={loading}
        ></WeatherCard>
        <Forecast forecast={forecast} loading={loading} />
      </Col>
    </Row>
  );
}

Weather.propType = {
  city: PropTypes.string,
};

Weather.defaultProps = {
  city: "",
};

export default Weather;
