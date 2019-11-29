import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from '../store/post/actions'
import { fetchDevelopers } from '../store/developers/actions'
import { Link } from 'react-router-dom'
import { deletePost } from '../store/WriteAPost/actions'


class PostPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts())
    this.props.dispatch(fetchDevelopers)
  }

  render() {
    return (
      <div>
        {this.props.posts && this.props.posts.rows.reduce((acc, item) => {
          if (item.id === parseInt(this.props.match.params.id)) {
            return (
              <div>
                <h1>Welcome to a single post's page!</h1>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p className="date-text">Created at: {item.createdAt}</p>
                <p>Written by:<Link to={`/developer/${item.author_id}`}>{this.props.developers && this.props.developers.rows.reduce((acc, dev) => {
                  if (dev.id === item.author_id) {
                    return dev.name
                  }
                  return acc
                }, null)}</Link></p>
                {this.props.login.profile.id === item.author_id && <button onClick={() => this.props.dispatch(deletePost(this.props.login.accessToken.jwt, item.id, () => this.props.history.push('/posts'), this.props.login.profile.id))}>Delete Post</button>}
              </div>
            )
          }
          return acc
        }, null)}
        {!this.props.posts && <p>Loading...</p>}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts,
    developers: reduxState.developers,
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(PostPage);