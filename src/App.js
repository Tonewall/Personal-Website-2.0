import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Navbar />
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
