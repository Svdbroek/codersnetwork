import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../store/post/actions";
import { fetchDevelopers } from "../store/developers/actions";
import { fetchComments, submitComment } from "../store/comments/action";
import { deletePost } from '../store/WriteAPost/actions'
import { Link } from "react-router-dom";
import Comment from "./Comment";

class PostPage extends React.Component {
  state = {
    commentBox: false,
    value: "leave a comment"
  };
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());

    this.props.dispatch(fetchDevelopers);

    this.props.dispatch(fetchComments(this.props.match.params.id));
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.dispatch(
      submitComment(
        this.state.value,
        this.props.match.params.id,
        this.props.login.accessToken.jwt
      )
    );
    this.setState({ commentBox: false, value: "leave a comment" });
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  commentHandler = event => {
    event.preventDefault();
    console.log("leaving comment");
    this.setState({ commentBox: !this.state.commentBox });
  };

  render() {
    return (
      <div>
        {this.props.posts &&
          this.props.posts.rows.reduce((acc, item) => {
            if (item.id === parseInt(this.props.match.params.id)) {
              return (
                <div>
                  <h1>Welcome to a single post's page!</h1>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <p className="date-text">Created at: {item.createdAt}</p>
                  <p>
                    Written by:
                    <Link to={`/developer/${item.author_id}`}>
                      {this.props.developers &&
                        this.props.developers.rows.reduce((acc, dev) => {
                          if (dev.id === item.author_id) {
                            return dev.name;
                          }
                          return acc;
                        }, null)}
                    </Link>
                  </p>
                  {this.props.login.profile.id === item.author_id && <button onClick={() => this.props.dispatch(deletePost(this.props.login.accessToken.jwt, item.id, () => this.props.history.push('/posts'), this.props.login.profile.id))}>Delete Post</button>}
                  {this.props.login.profile.name ? (
                    <div>
                      <button onClick={this.commentHandler}>
                        leave a comment
                      </button>
                      <p>
                        {this.state.commentBox ? (
                          <div>
                            <textarea
                              onChange={this.handleChange}
                              value={this.state.value}
                            />{" "}
                            <br />{" "}
                            <button onClick={this.submitHandler}>submit</button>
                          </div>
                        ) : (
                            ""
                          )}
                      </p>
                    </div>
                  ) : (
                      ""
                    )}
                  <div>
                    {this.props.comments &&
                      this.props.comments.rows.map(object => {
                        return (
                          <Comment
                            author={object.developer.name}
                            text={object.text}
                            authorId={object.developer.id}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            }
            return acc;
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
    comments: reduxState.comments,
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(PostPage);