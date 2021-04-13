import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import Forecast from "../Forecast/ForecastList";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useSelector } from "react-redux";

function Weather() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const location = useSelector((state) => state.location);
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

      getWeather(location);
      getForecast(location);
    },
    [location]
  );

  return (
    <Row className="justify-content-md-center">
      <Col fluid="true">
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

export default Weather;
