import React, { Component } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/test";
import AboutMe from "./components/AboutMe";
import Rosie from "./components/Rosie";
import CounselingWebApp from "./components/CounselingWebApp";
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
        <div className="spinnerBack">
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
            <Route path="/rosie" component={Rosie} />
            <Route path="/counselingwebapp" component={CounselingWebApp} />
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
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
}

export default App;
