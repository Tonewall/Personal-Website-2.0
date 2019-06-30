import React, { Component } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/test";
import AboutMe from "./components/AboutMe";
import Helicopter from "./components/Helicopter";
import Website1 from "./components/Website1";
import Website2 from "./components/Website2";
import AndroidApp from "./components/AndroidApp";
import FlyRight from "./components/FlyRight";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';


class App extends Component {
  
  state = {
    loading: true
  };
  componentDidMount() {
    demoAsyncCall().then(()=>this.setState({ loading:false }));
  }
  render() {
    const {loading} = this.state;
    if(loading) {
      return (
        <div className="spinners">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/test" component={Test} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/vms" component={Projects} />
            <Route path="/helicopter" component={Helicopter} />
            <Route path="/website1" component={Website1} />
            <Route path="/website2" component={Website2} />
            <Route path="/flyright" component={FlyRight} />
            <Route path="/androidapp" component={AndroidApp} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5000));
}

export default App;
