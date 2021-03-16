import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Weather from "../Weather/Weather";

function InnerPage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Weather></Weather>
        </Col>
      </Row>
    </Container>
  );
}

export default InnerPage;
