import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Weather from "../main/Weather/Weather";
import PropTypes from "prop-types";

function InnerPage() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <Weather></Weather>
        </Col>
      </Row>
    </Container>
  );
}

InnerPage.defaultProps = {
  city: "",
};

InnerPage.prototype = {
  city: PropTypes.string,
};

export default InnerPage;
