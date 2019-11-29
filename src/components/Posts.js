import React, { Component } from 'react';
import { fetchAllPosts, fetchRangeOfPosts } from '../store/post/actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Post from './Post'

class Posts extends Component {
  state = {
    currentPage: 1
  }
  componentDidMount() {
    this.props.dispatch(fetchRangeOfPosts('?offset=0&limit=10'))
  }
  handleOnClick = event => {
    const queryString = `?offset=${(event.target.name - 1) * 10}&limit=10`
    this.props.dispatch(fetchRangeOfPosts(queryString))
  }
  render() {
    return (
      <div>
        <h1>hello this is the posts feed</h1>
        <div className="pagination-section">
          <p className="pagination-section">Pages:</p><span> </span>
          {this.props.posts && Array(Math.ceil(this.props.posts.count / 10)).fill(null).map((item, index) => {
            return (
              <div className="pagination-section">
                <p className="pagination-section">
                  <a onClick={this.handleOnClick} name={index + 1} className="pagination-button">
                    {index + 1}
                  </a>
                </p>
                <span> </span>
              </div>)
          })}
          <p>Posts</p>
        </div>
        {this.props.posts && this.props.posts.rows.map(post => <Link to={`/posts/${post.id}`}><Post key={post.id} title={post.title} content={post.content} /></Link>)
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