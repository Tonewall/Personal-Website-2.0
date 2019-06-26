import React from "react";
import "./Home.css";
import $ from "jquery";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class home extends React.Component {
  
  getLanguages() {
    let languages = [
      {
        name: "Java",
        url: "java.png"
      },
      {
        name: "Python",
        url: "python.png"
      },
      {
        name: "JavaScript",
        url: "javaScript.png"
      },
      {
        name: "C",
        url: "c.png"
      },
      {
        name: "HTML5",
        url: "html5.png"
      },
      {
        name: "CSS3",
        url: "css.png"
      }
    ]
    const languagesList = languages.map((language) =>
      <div>
        <li><img className="skillIcons" alt={language.name} src={require("../images/"+language.url)}></img>{language.name}</li>
        <hr></hr>    
      </div>    
    );
    return (
      <ul className="sk">{languagesList}</ul>
    )
  }
  getTools() {
    let tools = [
      {
        name: "ReactJS",
        url: "reactJS.png"
      },
      {
        name: "Vue.js",
        url: "vueJS.png"
      },
      {
        name: "Node.js",
        url: "nodeJS.png"
      },
      {
        name: "Bootstrap",
        url: "bootstrap.png"
      },
      {
        name: "JQuery",
        url: "jQuery.png"
      },
      {
        name: "Vuetify",
        url: "vuetify.png"
      },
      {
        name: "Django",
        url: "django.png"
      }
    ]
    const toolsList = tools.map((tool) =>
      <div>
        <li><img className="skillIcons" alt={tool.name} src={require("../images/"+tool.url)}></img>{tool.name}</li>
        <hr></hr>
      </div>
    );
    return (
      <ul className="sk">{toolsList}</ul>
    )
  }
  componentDidMount() {
    $('.carousel').carousel({
      interval: 13000
    })
  }

  render() {
    return (
      <div className="container bgStyle">
        <div className="upper">
        <div className="containerVideo">
          <video className="video" src={require("../images/codingBackground.mov")} autoPlay={true} loop={true} muted></video>
        </div>
        </div>
        <div className="row"> 
          <ScrollAnimation animateIn="fadeInUp" className="name-home">
            <div className="name-home">
                Welcome To My Website!
              </div>
          </ScrollAnimation> 
        </div>
        <div className="row">
          
          <div className="col-md-8">
          <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
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
            </ScrollAnimation>
          </div>
          
          
          <div className="col-md-4" id="sideBar">
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About This Website</h5>
                <hr></hr>
                <p className="card-text">This webiste has been written entirely using JavaScript, HTML5, and CSS3 along with Bootstrap and JQuery Libraries and ReactJS framework. This is a fully renovated version of my first website which was all hardcoded without using any libraries or frameworks. While it was a great project to foster my knowledge with CSS3, it was very rudimentary</p>
                <a href="https://github.com/Tonewall/Personal-Website-2.0" className="btn btn-dark">GitHub Repo</a>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          
        </div>
        <hr></hr>
        <div className="row" id="skills">
          <ScrollAnimation className="anim" animateIn="slideInUp">
            <div className="skillsTitle">
              Skills
            </div>
          </ScrollAnimation>
        </div>
        <div className="row skillList">
        
          <div className="col-md-4 skill-picture">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight">
            <div className="card profile-card">
              <div className="card-body profile-card">
                <img alt="Profile" className="profileSkills" src={require("../images/Profile.jpg")}></img>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          
          <div className="col-md-4 skill-list">
          <ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutDown">
              <div className="card list-card">
                <div className="card-header">
                  <img className="codeSkill" alt="Code" src={require("../images/code.png")}></img>Languages
                </div>
                <div className="card-body">
                  {this.getLanguages()}
                </div>
              </div>
            </ScrollAnimation>
            </div>
            <div className="col-md-4 skill-list">
            <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
              <div className="card list-card">
                <div className="card-header">
                <img className="toolSkill" alt="Tools" src={require("../images/tools.png")}></img>Frameworks/Tools
                </div>
                <div className="card-body">
                  {this.getTools()}
                </div>
                
            </div>
            </ScrollAnimation>
          </div>

          

          

        </div>
      </div>
    );
  }
}

export default home;
