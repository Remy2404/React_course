import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col>
            <p>© My Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
