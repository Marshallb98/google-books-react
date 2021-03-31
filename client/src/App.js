import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
            <Saved />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
