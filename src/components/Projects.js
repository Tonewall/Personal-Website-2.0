import React from "react";
import "./Projects.css";

class projects extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  getTechnology() {
    let techs = ["JavaScript", "HTML5", "CSS3", "MongoDB", "ReactJS", "Bootstrap", "Node.js", "JQuery", "Git Version Control", "Visual Studio Code"]
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
            <img src="../images/black-background.png" alt="Loading"></img>
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
                <a className="nav-link active" href="/vms">VMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/flyright">FlyRight</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/counselingwebapp">Counseling Web App</a>
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
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/vms0.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/vms1.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/projects/vms2.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 4" src={require("../images/projects/vms3.png")}></img>
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
              <h1>VMS Bot</h1>
              <p className="card-text">This was the first project I had worked on at the Police Department. Video Management System was created for the Georgia Tech Police Department check all 2000+ campus security cameras regularly for quality assurance. The Department had originally planned on purchasing a popular third party software that did the same job and more for yearly. However, the creation of this website had managed to save the Department ~$100,000/yr.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/VMSBot" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
            </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
