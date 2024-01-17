import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import five from "../assets/img/five.png";
import six from "../assets/img/six.png";
import seven from "../assets/img/seven.png";
import eight from "../assets/img/eight.png";
import nine from "../assets/img/nine.png";
import ten from "../assets/img/ten.png";
import "../layouts/style.css"; // Import your custom CSS file

function BodyImages() {
  return (
    <Container style={

      {width:780}
    }>
      <Row className="image-rowone">
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={one} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={two} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={three} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={four} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={five} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={six} rounded />
        </Col>
      </Row>
      <Row className="image-rowtwo">
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={seven} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={eight} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={nine} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={ten} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={nine} rounded />
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <Image src={ten} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default BodyImages;
