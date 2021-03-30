import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar'
function App() {
  return (
    <Router>
    <div>
    <Navbar/>
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}


export default App;
