import React from "react";
import "./Contact.css";

class contact extends React.Component {
  render() {
    return (
      <div className="container bgStyle contactMain">
        <div className="card memeCard">
          <div className="card-body">
            <p className="contact-card-text">
              <b>Me</b>: It’s okay, I’ll finish this page before anyone sees this
              <br></br>
              <b>Recruiter</b>: *Opens this page with an overused meme
              <br></br>
              <b>Me</b>:
              <br></br>
            </p>
            <img src={require("../images/meme.png")} alt="Overused Meme" className="meme"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
