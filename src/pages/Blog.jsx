import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "This is a description of Blog Post 1.",
      date: "May 1, 2023",
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "This is a description of Blog Post 2.",
      date: "April 15, 2023",
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "This is a description of Blog Post 3.",
      date: "March 20, 2023",
    },
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Our Blog</h1>
          <p>
            Stay up-to-date with the latest news, tips, and insights from our
            team.
          </p>
        </Col>
      </Row>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Footer>{post.date}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
