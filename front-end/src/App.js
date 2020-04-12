import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";

import Search from "./pages/search";
import Saved from "./pages/saved";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Jumbotron />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
