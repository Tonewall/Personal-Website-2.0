import React, { Component } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
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
            {/* <Route path="/bio" component={Bio} /> */}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
