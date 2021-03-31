import React from "react";
import Button from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import API from '../utils/Api'

function List(props) {

  function saveBook({book}) {

    API.saveBook({

       id: props.book.id,
        image: props.book.image,
        title: props.book.title,
        author: props.book.author,
        link: props.book.link,
        description: props.book.description,
        categories: props.book.categories
    })
 }
  return (
      
      <Row key={props.book.id}>
          <Col>
    <Card  style={{ width: '100%' }}>
      <Card.Header>{props.book.title} By {props.book.author}</Card.Header>
      <Row>
      <Card.Body>
        <Card.Title>{props.book.categories}</Card.Title>
        <Image  variant="top" src={props.book.image} thumbnail />
        <Card.Text>
        {props.book.description}
        </Card.Text>
        <a href={props.book.link}><Button variant="primary">View</Button></a>
        <Button onClick={event => saveBook(props.book)} variant="success">Save</Button>
  
      </Card.Body>
      </Row>
    </Card>
    </Col>
    </Row>
  );
}

export default List;
