import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logOut } from '../store/Login/actions.js'

class LoggedOut extends Component {
  componentDidMount() {
    this.props.dispatch(logOut())
  }
  render() {
    return (
      <div>
        <h1>You are logged out!</h1>
      </div>
    );
  }
}

export default connect()(LoggedOut);