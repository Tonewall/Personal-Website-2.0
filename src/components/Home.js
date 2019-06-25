import React from "react";
import "./Home.css";
import $ from "jquery";

class home extends React.Component {
  

  componentDidMount() {
    $('.carousel').carousel({
      interval: 13000
    })
  }

  render() {
    return (
      <div className="container bgStyle">
        <div className="row"> 
          <div className="name-home">
            Welcome To My Website!
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <video className="d-block w-100" src={require("../images/carousel-0.mp4")} autoPlay={true} loop={true} muted></video>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 1" src={require("../images/carousel-1.jpg")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 2" src={require("../images/carousel-2.jpg")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 3" src={require("../images/carousel-3.jpg")}></img>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="carousel 4" src={require("../images/carousel-4.jpg")}></img>
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
                <a href="https://www.instagram.com/tonewalljackson/" target="_blank" rel="noopener noreferrer" className="btn btn-primary instaButton">Instagram</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="sideBar">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">About This Website</h5>
                <hr></hr>
                <p class="card-text">This webiste has been written entirely using JavaScript, HTML5, and CSS3 along with Bootstrap and JQuery Libraries and ReactJS framework. This is a fully renovated version of my first website which was all hardcoded without using any libraries or frameworks. While it was a great project to foster my knowledge with CSS3, it was very rudimentary</p>
                <a href="https://github.com/Tonewall/Personal-Website-2.0" class="btn btn-dark">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="skills">
          <div className="skillsTitle">
            Skills
          </div>

        </div>
      </div>
    );
  }
}

export default home;
