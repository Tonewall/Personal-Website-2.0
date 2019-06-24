import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-top">
          <div className="container">
            <div className="row" id="footer-top">
              <div className="col-md-8" id="footer-top">
                This site is made as a personal project. All of the code has been written by me using jQuery and Bootstrap libraries along with ReactJS framework.
              </div>
              
              <div className="col-md-4" id="footer-columns">
                <div className="footer-contact-title">
                  Contact
                </div>
                <div className="footer-contact-infos">
                  Email: tchoi52@gmail.com
                </div>
                <div className="footer-contact-infos">
                  Phone: 706-668-7152
                </div>
              </div>

            </div>
            <div className="row" id="footer-bottom">
              <div className="col-md-12">
                <div className="row">
                  <div id="sm-footer-title">
                  Social Media
                  </div>
                </div>
                <div className="row">
                  <a id="sm-footer" href="https://www.instagram.com/tonewalljackson/" target="_blank">Instagram</a>
                  <a id="sm-footer" href="https://www.linkedin.com/in/tony-choi-973675ab/" target="_blank">LinkedIn</a>
                  <a id="sm-footer" href="https://github.com/Tonewall" target="_blank">GitHub</a>
                  <a id="sm-footer" href="https://www.facebook.com/tony.choi.52090" target="_blank">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
