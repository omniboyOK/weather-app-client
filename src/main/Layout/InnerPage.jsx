import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Weather from "../Weather/Weather";
import PropTypes from "prop-types";

function InnerPage({ city }) {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <Weather city={city}></Weather>
        </Col>
      </Row>
    </Container>
  );
}

InnerPage.defaultProps = {
  city: ""
};

InnerPage.prototype = {
  city: PropTypes.string
};

export default InnerPage;
