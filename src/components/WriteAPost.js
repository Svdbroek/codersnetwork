import React, { Component } from 'react';
import { connect } from "react-redux";
import { sendPost } from '../store/WriteAPost/actions'

class WriteAPost extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.login.accessToken.jwt)
    const action = sendPost(this.props.login.accessToken.jwt, this.state.title, this.state.content, this.props.history.push)
    this.props.dispatch(action)
  }
  render() {
    return (
      <div>
        <h1>Write a post!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            Title: <input
              type="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Content: <input
              type="content"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(WriteAPost);