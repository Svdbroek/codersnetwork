import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from '../store/post/actions'
import { fetchDevelopers } from '../store/developers/actions'
import {fetchComments} from '../store/comments/action'
import { Link } from 'react-router-dom'
import Comment from './Comment'



class PostPage extends React.Component {
  componentDidMount() {
    if (!this.props.posts) {
      this.props.dispatch(fetchAllPosts())
    }
    if (!this.props.developers) {
      console.log('HELLO!!!')
      this.props.dispatch(fetchDevelopers)
    }
    this.props.dispatch(fetchComments(this.props.match.params.id))
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
                <div> 
                {this.props.comments && this.props.comments.rows.map((object)=>{return <Comment author={object.developer.name} text={object.text} id={object.id}/> })}

                </div>
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
    comments: reduxState.comments
  };
}

export default connect(mapStateToProps)(PostPage);