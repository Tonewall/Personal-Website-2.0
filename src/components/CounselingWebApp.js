import React from "react";
import "./Projects.css";

class counselingWebApp extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  getTechnology() {
    let techs = ["ReactJS", "JavaScript", "SQL", "Node.js", "Git Version Control"]
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
                <a className="nav-link" href="/rosie">Rosie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vms">VMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/flyright">FlyRight</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/counselingwebapp">Counseling Web App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/androidapp">Android App</a>
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
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/counseling0.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/counseling1.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/projects/counseling2.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 4" src={require("../images/projects/counseling3.png")}></img>
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
              <h1>Counseling Web App</h1>
              <p className="card-text">Counseling Web App allows the Georgia Tech Police Department to look at the call data sent to dispatch and Georgia Tech's Counseling Center to better prepare for emergencies on campus.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/CounselingWebApp" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
            </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default counselingWebApp;
