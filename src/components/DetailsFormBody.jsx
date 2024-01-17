import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const DetailsFormBody = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <div className="text-center">
                <FaUser size={50} className="mb-3" />
              </div>
              <Card.Title className="text-center">
                Hein Min Latt
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam commodo sagittis mauris, sit amet tristique lectus
                  posuere at.
                </p>
                <p>
                  Fusce non congue metus. Sed nec mi justo. Integer aliquet,
                  risus in ullamcorper tempus, lacus odio imperdiet elit, nec
                  luctus magna metus ac ex.
                </p>
              </Card.Text>
              <div className="text-center">
                <img
                  src="https://placekitten.com/200/200"
                  alt="Profile"
                  className="img-fluid rounded-circle"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsFormBody;
