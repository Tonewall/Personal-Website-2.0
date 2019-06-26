import React, { Component } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/test";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
