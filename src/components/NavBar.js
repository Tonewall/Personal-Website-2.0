import React, {Component} from "react";
import "./NavBar.css";
import Resume from '../Resume.pdf';
import { Link } from 'react-router-dom'






export default class NavBar extends Component {

  render() {
    return (
  <nav className="navbar shadow p-1 mb-5 fixed-top navbar-expand-md navbar-light bg-light" id="navBarMain">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {/* <li className="nav-item">
          <a className="nav-link" href="/aboutme">About Me</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/rosie">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Random
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown"
          id="btn-id">
            <a className="dropdown-item" href="#">Coming Soon</a>
            <a className="dropdown-item" href="#">Coming Soon</a>
          </div>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Social Media
          </a>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown"
          id="btn-id">
            <a id="instagram" className="dropdown-item" href="https://www.instagram.com/tonewalljackson/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/instagram.png")} alt="instagram" id="icon" width="30px" height="30px"></img>
              Instagram
            </a>
            <a id="linkedIn" className="dropdown-item" href="https://www.linkedin.com/in/tony-choi-973675ab/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/linkedin.png")} alt="Linked In" id="icon" width="20px" height="20px"></img>
              {' '} LinkedIn
            </a>
            <a id="github" className="dropdown-item" href="https://github.com/Tonewall" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/github.png")} alt="GitHub" id="icon" width="23px" height="23px"></img>
              {' '} GitHub
            </a>
            <a id="facebook" className="dropdown-item facebook" href="https://www.facebook.com/tony.choi.52090" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/facebook.png")} alt="Facebook" id="icon" width="20px" height="20px"></img>
              {' '} Facebook
            </a>
            
            
          </div>
        </li>
      </ul>
      <div className="navName d-none d-xl-block">
        Geunyoung (Tony) Choi
      </div>
      <div>
        <button className="say-hi-button btn btn-outline-primary my-2 my-sm-0 say-hi">
          <a className="mailto" href="mailto:tchoi52@gmail.com">
          SAY HI!
          </a>
        </button>
        
      
    </div>
    </div>
  </nav>
  
    );
  }
  
}


