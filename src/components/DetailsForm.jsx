import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import eng from "../assets/img/eng.png";
import engdown from "../assets/img/engdown.png";
import ten from "../assets/img/ten.png";

function DetailsForm() {
  const headingStyle = {
    fontSize: "24px", // Set the font size
    fontWeight: "bold", // Set the font weight
  };
  return (
    <div>
      <h1 className="text-center mt-5 mb-5" style={headingStyle}>
        What to read next
      </h1>
      <Container className="">
        <Row className="">
          <Col xs={6} md={4} className="mb-3">
            <Image src={two} rounded />
            <p>Hello</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={three} rounded />
            <p>Hello</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={one} rounded />
            <p>Hello</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={engdown} rounded />
            <p>Hello</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={eng} rounded />
            <p>Hello</p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={ten} rounded />
            <p>Hello</p>
          </Col>
        </Row>
      </Container>

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="border border-4 p-3 mb-5 mt-5">
          <h1 className="text-center">Sign up for the newsletter</h1>
          <p className="text-center mb-3 mt-3">
            If you want relevant updates occasionally, sign up for the <br />
            private newsletter. Your email is never shared.{" "}
          </p>
          <div className="d-flex justify-content-center">
            <Form.Control size="sm" type="text" placeholder="Large text" />
            <Button variant="primary" className="">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsForm;
