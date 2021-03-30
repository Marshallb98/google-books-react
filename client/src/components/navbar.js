import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import React, { Component } from "react";

function Header() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>Google Books Database</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
  
  export default Header;