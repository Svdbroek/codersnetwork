import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Post;