import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import WeatherCard from "../WeatherCard/WeatherCard";
import PropTypes from "prop-types";

function Forecast({ forecast, loading }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <>
            {forecast.map((item) => (
              <WeatherCard
                main={item.main}
                weather={item.weather}
                footer={item.date}
                key={item.date}
              ></WeatherCard>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
}

Forecast.defaultProps = {
  forecast: [],
  loading: false,
};

Forecast.prototype = {
    forecast: PropTypes.array,
    loading: PropTypes.bool
  };

export default Forecast;
