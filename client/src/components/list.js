import React from "react";
import Button from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"



function List(props) {
  return (
      
      <Row>
          <Col>
    <Card key={props.book.id} style={{ width: '100%' }}>
      <Card.Header>{props.book.title} By {props.book.author}</Card.Header>
      <Row>
      <Card.Body>
        <Card.Title>{props.categories}</Card.Title>
        <Image  variant="top" src={props.book.image} thumbnail />
        <Card.Text>
        {props.book.description}
        </Card.Text>
        <a href={props.book.link}><Button variant="primary">View</Button></a>
        <Button onClick={event => props.saveBook(props.book)} variant="success">Save</Button>
  
      </Card.Body>
      </Row>
    </Card>
    </Col>
    </Row>
  );
}

export default List;
