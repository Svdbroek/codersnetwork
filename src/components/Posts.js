import React, { Component } from 'react';
import { fetchAllPosts, fetchRangeOfPosts } from '../store/post/actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Post from './Post'
import { loadPartialConfig } from '@babel/core';

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
    this.setState({ currentPage: event.target.name })
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
          {this.props.posts && <p>Posts {(this.state.currentPage - 1) * 10 + 1} - {(this.state.currentPage * 10) < this.props.posts.count ? (this.state.currentPage * 10) : this.props.posts.count} out of {this.props.posts.count}</p>}
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