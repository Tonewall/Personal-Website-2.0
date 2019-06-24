import React from "react";
import "./Home.css";
// import { Carousel } from "react-bootstrap";

class home extends React.Component {
  render() {
    return (
      <div className="container bgStyle">
        <img src={require("../images/instagram.png")} width="30px" height="30px"></img>
      </div>
    );
  }
}

export default home;
