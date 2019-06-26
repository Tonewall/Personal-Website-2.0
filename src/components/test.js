import React from "react";
import "./test.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

 

class test extends React.Component {
    
    
  render() {
    return (
      <div className="container bgStyle testMain">
        <ScrollAnimation className="anim" animateIn="fadeIn">
  Some Text
</ScrollAnimation>
      </div>
    );
  }
}

export default test;
