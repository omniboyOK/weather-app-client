import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Weather from "../Weather/Weather";

function InnerPage({ city }) {
  return (
    <Container>
      <Row>
        <Col>
          <Weather city={city}></Weather>
        </Col>
      </Row>
    </Container>
  );
}

export default InnerPage;
