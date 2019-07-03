import React from "react";
import "./Projects.css";

class website1 extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  getTechnology() {
    let techs = ["JavaScript", "HTML5", "CSS3", "Visual Studio Code"]
    const techList = techs.map((tech) =>
      <div>
        <li>{tech}</li>
      </div>    
    );
    return (
      <ul>{techList}</ul>
    )
  }
  componentDidMount() {
    var elem = document.getElementById("load");
    setTimeout(function(){ 
      elem.parentNode.removeChild(elem);
    }, 1000);  }
  render() {
    return (
      <div>
        <div className="spinnerBack" id="load">
          <div className="containerVideo">
            <img src="../images/black-background.png"></img>
          </div>
        <div className="spinners">
          
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        </div>
        <div className="container bgStyle">
        <div className="card project-card">
          <div className="card-header card-header-project">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link" href="/vms">VMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/flyright">FlyRight</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/androidapp">Android App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/helicopter">Helicopter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/website2">Website 2.0</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/website1">Website 1.0</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="row">
            <div className="col-md-6">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/website10.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/website11.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/projects/website12.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 4" src={require("../images/projects/website13.png")}></img>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
            <div className="col-md-6">
              <h1>Personal Website 1.0</h1>
              <p className="card-text">This was my very first personal website written entirely in HTML5, CSS3, and some JavaScript. I didn't use any libraries like Bootstrap in order to foster my knowledge in CSS3. Since I now have a firm grasp of the style sheet language, I decided to recreate a polished version of the website and scrap this version deep in the abyss that is my GitHub Repository.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/Personal-Website" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
            </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default website1;
