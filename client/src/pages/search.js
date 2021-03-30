import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup"
import List from "../components/list"
function Search() {
  return (
    <div>
      <Row>
        <Col>
          <Jumbotron>
            <Container>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <br/>
      <Row>
          <Col>
        <Form>
          <Form.Group>
            <Form.Label>Search for book here</Form.Label>
            <Form.Control type="text" placeholder="Enter book here" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        </Col>
      </Row>
      <br/>
      <Row>
          <Col>
      <CardGroup>
        <List/>
      </CardGroup>
      </Col>
      </Row>
    </div>
  );
}

export default Search;
