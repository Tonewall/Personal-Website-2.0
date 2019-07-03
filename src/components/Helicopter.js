import React from "react";
import "./Projects.css";

class helicopter extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
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
      componentDidMount() {
        demoAsyncCall().then(()=>this.setState({ loading:false }));
      }
  render() {
    const {loading} = this.state;

    if(loading) {
      return (
        <div className="spinnerBack">
          <div className="loadingInfo">
            Almost Done
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
      );

    }
    return (
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
                <a className="nav-link active" href="/helicopter">Helicopter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/website2">Website 2.0</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/website1">Website 1.0</a>
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
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/projects/helicopter0.png")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/projects/helicopter1.png")}></img>
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
              <h1>Helicopter Game Boy Emulator</h1>
              <p className="card-text">This was a project I had done for my CS2110 class. This is a Game Boy version of a helicopter game written entirely in C with GBA emulator on a Linux virtual machine</p>
              <h5>Technology Summary:</h5>
              <div>{this.getTechnology()}</div>
              <a href="https://github.com/Tonewall/Helicopter" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
}

export default helicopter;
