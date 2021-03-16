import React, { Component } from "react";
import { Card } from "react-bootstrap";

function WeatherCard({ main, weather }) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{main.temp}</Card.Title>
        <Card.Text>
          <h4>{main.max_temp}</h4>
          <h4>{main.min_temp}</h4>
          <p>{weather.description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        
      </Card.Footer>
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
    description: "-"
  },
};

export default WeatherCard;
