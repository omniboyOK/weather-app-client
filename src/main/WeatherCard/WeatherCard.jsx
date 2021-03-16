import React from "react";
import { Card, Spinner } from "react-bootstrap";

function WeatherCard({ main, weather, title, footer, loading }) {
  return (
    <Card className="text-center overflow-hidden m-1">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}

        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <>
            {weather.icon ? (
              <img
                alt={weather.description}
                src={`/images/${weather.icon}.png`}
                style={{ maxWidth: "10em" }}
              />
            ) : (
              <></>
            )}
            <Card.Title>{main.temp} °C</Card.Title>
            <Card.Text>Max {main.temp_max} °C</Card.Text>
            <Card.Text>Min {main.temp_min} °C</Card.Text>
            <Card.Text>{weather.description}</Card.Text>
          </>
        )}
      </Card.Body>
      {footer && <Card.Footer>{footer}</Card.Footer>}
    </Card>
  );
}

WeatherCard.defaultProps = {
  main: {
    temp: "-",
    max_temp: "-",
    min_temp: "-",
  },
  weather: {
    description: "-",
  },
};

export default WeatherCard;
