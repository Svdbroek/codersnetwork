import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from '../store/post/actions'


class PostPage extends React.Component {
  componentDidMount() {
    if (!this.props.posts) {
      this.props.dispatch(fetchAllPosts())
    }
  }

  render() {
    return (
      <div>
        {this.props.posts && this.props.posts.reduce((acc, item) => {
          if (item.id === parseInt(this.props.match.params.id)) {
            return (
              <div>
                <h1>Welcome to a single post's page!</h1>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p className="date-text">Created at: {item.createdAt}</p>
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
    posts: reduxState.posts
  };
}

export default connect(mapStateToProps)(PostPage);