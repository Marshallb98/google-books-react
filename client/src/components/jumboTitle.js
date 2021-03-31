import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
function JumbotronHeader() {
  return (
        <Jumbotron>
          <Container>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Container>
        </Jumbotron>
  );
}
export default JumbotronHeader;
