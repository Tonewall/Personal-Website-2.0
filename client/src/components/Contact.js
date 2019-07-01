import React from "react";
import "./Contact.css";
import axios from 'axios';

class contact extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      email: '',
      message: '',
      isRecruiter: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if(!this.state.email) {
      window.alert("Provide an email address!");
      return
    } else if (!this.state.message) {
      window.alert("What, no message?");
      return
    }
    window.alert('Message Sent!');
    const {email, message, isRecruiter} = this.state;

    await axios.post('/api/form', {
      email,
      message,
      isRecruiter
    })

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
        <div className="card contact-card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input 
                  type="email" 
                  name="email"
                  onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <br></br>
                <textarea 
                  name="message"
                  rows='5'
                  onChange={this.handleChange}/>
              </div>
              <div className="form-check">
                <input 
                  type="checkbox" 
                  name="isRecruiter"
                  onChange={this.handleChange}/>
                <label htmlFor="isRecuiter">Are you a recruiter?</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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