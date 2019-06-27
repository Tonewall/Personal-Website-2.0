import React from "react";
import "./Projects.css";

class flyright extends React.Component {
  getTechnology() {
    let techs = ["JavaScript", "HTML5", "CSS3", "Python", "Vue.js", "Django", "Bootstrap", "Node.js", "JQuery", "Git Version Control", "Visual Studio Code"]
    const techList = techs.map((tech) =>
      <div>
        <li>{tech}</li>
      </div>    
    );
    return (
      <ul>{techList}</ul>
    )
  }
  render() {
    return (
      <div className="container bgStyle">
        <div class="card project-card">
          <div class="card-header card-header-project">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link" href="/vms">VMS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/flyright">FlyRight</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/androidapp">Android App</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/helicopter">Helicopter</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/website2">Website 2.0</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/website1">Website 1.0</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="row">
            <div class="col-md-6">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/flyright0.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/flyright1.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/projects/flyright2.png")}></img>
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
            <div class="col-md-6">
              <h1>FlyRight (IcarusMap)</h1>
              <p class="card-text">This is an ongoing project originally created by a former student employee from Georgia Tech Police Department, Sam Crane. FlyRight website allows users to register flights for their Unmanned Aircraft Systems on the Georgia Tech’s Campus while the server notifies the dispatch of the upcoming flights. We are currently adding new features such as a calendar view to organize all of the flights for the admin and improving user experience such as a preset flying zone for automatic clearance.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/FlyRight" target="_blank" rel="noopener noreferrer" class="btn btn-primary">GitHub</a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default flyright;
