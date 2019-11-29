import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from '../store/WriteAPost/actions'
import { withRouter } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        {this.props.isThereDeleteButton && <button onClick={() => this.props.dispatch(deletePost(this.props.login.accessToken.jwt, this.props.id, this.props.history.push, this.props.login.profile.id))}>Delete</button>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { login: state.login };
}

export default withRouter(connect(mapStateToProps)(Post));