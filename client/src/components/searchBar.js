import React from "react";
function SearchBar() {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label>Search for book here</Form.Label>
            <Form.Control
              name="book"
              type="search"
              placeholder="Enter book here"
            />
            <Button
              variant="primary"
              type="submit"
              name="book"
              onClick={handleFormSubmit()}
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
export default SearchBar;
