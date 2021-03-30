import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar";
import Search from "./pages/search";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container fluid>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            {/* <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
