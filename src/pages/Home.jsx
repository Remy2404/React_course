import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description of Product 1.",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description of Product 2.",
      price: 24.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description of Product 3.",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to Our E-commerce Website</h1>
          <p>Browse our featured products and start shopping today!</p>
        </Col>
      </Row>
      <Row>
        {featuredProducts.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
