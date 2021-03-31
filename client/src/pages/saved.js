import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import API from "../utils/Api";
import JumbotronHeader from "../components/jumboTitle";
import Header from "../components/navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
function Saved() {
    const [saved, setSaved] = useState([])


    useEffect(() => {
        searchBooks()
    }, [])

    function searchBooks() {
        API.getBooks()
            .then(res => {


                setSaved(res.data)
                console.log(res.data)

            })
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => {


                searchBooks()
                console.log(res.data)
            })
    }

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <JumbotronHeader />
          </Col>
        </Row>
        <div>

          <br />
          <Row>
            <Col>
              <CardGroup>
                {saved.map((book) => {
                  book = {
                    id: book.id,
                    _id:book._id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink,
                    categories: book.volumeInfo.categories,
                  };
                  return   <Row>
                  <Col>
            <Card key={book.id} style={{ width: '100%' }}>
              <Card.Header>{book.title} By {book.author}</Card.Header>
              <Row>
              <Card.Body>
                <Card.Title>{book.categories}</Card.Title>
                <Image  variant="top" src={book.image} thumbnail />
                <Card.Text>
                {book.description}
                </Card.Text>
                <a href={book.link}><Button variant="primary">View</Button></a>
                <Button onClick={event => deleteBook(book._id)} variant="success">Save</Button>
          
              </Card.Body>
              </Row>
            </Card>
            </Col>
            </Row>
                })}
              </CardGroup>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Saved;
