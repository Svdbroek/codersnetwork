import React from "react";
import { connect } from "react-redux";
import {signup} from '../store/signup/actions'



class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    name:""
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log ('submitting')
   this.props.dispatch( signup(this.state.email, this.state.name, this.state.password)) // don't forget to this.props.
    
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <p>
            name: <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
           email: <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
          password:  <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
         
          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
      </div>
    );
  }
}


export default connect()(SignUp);