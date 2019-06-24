import React, {Component} from "react";
import "./NavBar.css";
import Resume from '../Resume.pdf';




export default class NavBar extends Component {

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white">
  <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/bio">Bio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={Resume} target="_blank">Resume</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Random
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown"
          id="btn-id">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Social Media
          </a>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown"
          id="btn-id">
            <a id="instagram" className="dropdown-item" href="https://www.instagram.com/tonewalljackson/" target="_blank">
              <img src="../images/instagram.png" width="30%" height="100%"></img>
              Instagram
            </a>
            <a id="linkedIn" className="dropdown-item" href="https://www.linkedin.com/in/tony-choi-973675ab/" target="_blank">LinkedIn</a>
            <a id="github" className="dropdown-item" href="https://github.com/Tonewall" target="_blank">GitHub</a>
            <a id="facebook" className="dropdown-item facebook" href="https://www.facebook.com/tony.choi.52090" target="_blank">Facebook</a>
            
            
          </div>
        </li>
      </ul>
      <div class="inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" href="/contact">Contact</button>
    </div>
    </div>
  </nav>
  
      </div>
    );
  }
  
}


