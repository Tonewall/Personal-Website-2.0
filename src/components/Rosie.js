import React from "react";
import "./Projects.css";
import fullReport from "../images/projects/report.pdf"

class rosie extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
    getTechnology() {
        let techs = ["Python", "Dlib", "OpenCV", "GStreamer", "Google Assistant SDK", "DialogFlow"]
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
        }, 1000);      }
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
                <a className="nav-link active" href="/rosie">Rosie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vms">VMS</a>
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
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <iframe width="500" height="300" src="https://www.youtube.com/embed/QF61F87-Pj8"></iframe>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 rotate" alt="carousel 2" src={require("../images/projects/Rosie0.jpg")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/projects/Rosie1.jpg")}></img>
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
              <h1>Rosie - Smart Door Lock</h1>
              <p className="card-text">This was a project I had done for my CS4220 class with a friend. Rosie is a smart door lock built using NVIDIA's Jetson Nano with a voice interface that allows users to unlock their door using only their face. We created a facial recognition feature which allows Rosie to distinguish the authorized users from the unauthorized visitors. Rosie's facial recognition software was built in python using Dlib, OpenCV and Gstreamer. We also created a voice interface to allow authorized users and unauthorized visitors to communicate with Rosie. The voice interface was built using Google Assistant SDK and DialogFlow. We also created a mock web app for users to check the status of the door and lock/unlock the door remotely using their phone. You can check out our full report on the link below.</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href={fullReport} target="_blank" rel="noopener noreferrer" className="btn btn-primary fullreport">Full Report</a>
              <a href="https://github.com/Tonewall/Rosie" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
            </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default rosie;
