import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to our e-commerce website! We are a team of passionate
            individuals dedicated to providing you with the best online shopping
            experience. Our mission is to offer a wide range of high-quality
            products at competitive prices, along with exceptional customer
            service.
          </p>
          <p>
            At our core, we believe in transparency, integrity, and putting our
            customers first. We strive to create a seamless and enjoyable
            shopping journey, from browsing our products to completing your
            purchase and receiving your order.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Our e-commerce journey began with a simple idea: to make shopping
            more convenient and accessible for everyone. Over the years, we have
            grown and evolved, constantly adapting to the changing needs of our
            customers and the ever-evolving digital landscape.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Quality Products</li>
            <li>Ethical Practices</li>
            <li>Innovation</li>
            <li>Sustainability</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
