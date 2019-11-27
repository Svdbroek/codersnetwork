import React from "react";
import { connect } from "react-redux";
import {fetchPost} from '../store/post/actions'


class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    this.props.dispatch(fetchPost(post_id))
    console.log('fetching post', post_id)
  }

  render() {
    const title = "??";

    return (
      <div>
        <h1>{title}</h1>
        <p>Loading...</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    post: reduxState.post
  };
}

export default connect(mapStateToProps)(PostPage);