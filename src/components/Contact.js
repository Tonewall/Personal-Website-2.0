import React from "react";
import "./Contact.css";

class contact extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
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
            Just Another Spinner
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
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default contact;
