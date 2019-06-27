import React from "react";
import "./Projects.css";

class androidapp extends React.Component {
  getTechnology() {
    let techs = ["Java", "Android Studio", "Git Version Control"]
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
                <a class="nav-link" href="/flyright">FlyRight</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/androidapp">Android App</a>
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
                      <img className="d-block appH" alt="carousel 1" src={require("../images/projects/app0.PNG")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block appH" alt="carousel 2" src={require("../images/projects/app1.PNG")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block appH" alt="carousel 3" src={require("../images/projects/app2.PNG")}></img>
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
              <h1>Android Application</h1>
              <p class="card-text">This was a group project for my CS2340 class. This is an Android application written in Java on Android Studio for nonprofit organizations which allows users to find nearby places to either donate items or buy items from and admin to manage inventories/stores. This project not only allowed us to get familiar with Android Studio, but also the Git version control.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/cs2340" target="_blank" rel="noopener noreferrer" class="btn btn-primary">GitHub</a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default androidapp;
