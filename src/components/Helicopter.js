import React from "react";
import "./Projects.css";

class helicopter extends React.Component {
    getTechnology() {
        let techs = ["C", "GBA Emulator"]
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
                <a class="nav-link" href="/androidapp">Android App</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/helicopter">Helicopter</a>
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
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/helicopter0.PNG")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/helicopter1.PNG")}></img>
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
              <h1>Helicopter Game Boy Emulator</h1>
              <p class="card-text">This was a project I had done for my CS2110 class. This is a Game Boy version of a helicopter game written entirely in C with GBA emulator on a Linux virtual machine</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/Helicopter" target="_blank" rel="noopener noreferrer" class="btn btn-primary">GitHub</a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default helicopter;