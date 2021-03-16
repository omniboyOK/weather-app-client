import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardGroup, Row } from "react-bootstrap";
import WeatherCard from "../WeatherCard/WeatherCard";

function Weather({ city }) {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  useEffect(
    function () {
      const getWeather = (location) => {
        axios
          .get("/v1/current/" + location)
          .then((response) => {
            setCurrent(response.data);
            console.log(response.data);
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
          })
          .catch((error) => {
            console.log(error);
          });
      };

      getWeather(city);
      getForecast(city);
    },
    [city]
  );

  return (
    <>
      <Row>
        <WeatherCard
          style={{ width: '18rem' }}
          main={current.main}
          weather={current.weather}
        ></WeatherCard>
      </Row>
      <Row>
        <CardGroup>
          {forecast.map((item) => (
            <WeatherCard main={item.main} weather={item.weather}></WeatherCard>
          ))}
        </CardGroup>
      </Row>
    </>
  );
}

Weather.defaultProps = {
  city: "",
};

export default Weather;
