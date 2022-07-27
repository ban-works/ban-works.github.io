// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Post from "./post.js";
import Home from "./home.js";
import AppNav from "./nav.js";

function App() {

  return (
    <Router>
      <AppNav/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/*" component={Post} />
    </Switch>
  </Router>
  );
}

export default App;
