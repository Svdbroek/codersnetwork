import React from "react";
import { connect } from "react-redux";
import { login } from '../store/Login/actions'
import { Link } from 'react-router-dom'


class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('submitting')
    const action = login(this.state.email, this.state.password, this.props.history.push)
    this.props.dispatch(action) // don't forget to this.props.
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            email: <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            password: <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up </Link> </p>
      </div>
    );
  }
}


export default connect()(LoginPage);