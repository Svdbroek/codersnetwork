import React, { Component } from 'react';
import { fetchAllPosts } from '../store/post/actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Post from './Post'

class Posts extends Component {
  componentDidMount() {
    if (!this.props.posts) {
      this.props.dispatch(fetchAllPosts())
    }
  }
  render() {
    return (
      <div>
        <h1>hello this is the posts feed</h1>
        {this.props.posts && this.props.posts.map(post => <Link to={`/posts/${post.id}`}><Post key={post.id} title={post.title} content={post.content} /></Link>)
        }
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}

export default connect(mapStateToProps)(Posts);