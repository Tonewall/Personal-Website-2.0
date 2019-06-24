import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                One of three columns
              </div>
              <div class="col-md-3">
                One of three columns
              </div>
              <div class="col-md-3">
                One of three columns
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
