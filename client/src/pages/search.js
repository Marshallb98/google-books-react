import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import API from "../utils/Api";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import List from "../components/list";
import JumbotronHeader from "../components/jumboTitle";
import Header from "../components/navbar";
import Container from "react-bootstrap/Container";
function Search() {
  useEffect(() => {
    getResults();
  }, []);

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  
  function saveBook(book) {

    API.saveBook({

        id: book.id,
        image: book.image,
        title: book.title,
        author: book.author,
        link: book.link,
        description: book.description,
        categories: book.categories
    })
 }
  function getResults() {
    API.getSearchResults(searchTerm).then((res) => {
      console.log(res.data.items);
      setBooks(res.data.items);
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    getResults();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerm(value);
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
                <FormControl
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search for a book"
                />
                <Button variant="primary" onClick={handleFormSubmit}>
                  Search
                </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <CardGroup>
                {books.map((book) => {
                  book = {
                    id: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.volumeInfo.infoLink,
                    categories: book.volumeInfo.categories,
                  };
                  return <List book={book}
                  saveBook={saveBook}/>;
                })}
              </CardGroup>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Search;
