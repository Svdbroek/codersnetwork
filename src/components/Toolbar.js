import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <Link to="/" className="toolbar-element">Home</Link> <span></span>
        {!this.props.login.profile.name ? (
          <Link to="/login" className="toolbar-element">Login</Link>
        ) : (
            <Link to= {`/developer/${this.props.login.profile.id}`} >{this.props.login.profile.name}</Link>
          )}
        <span> </span> <Link to="/developers" className="toolbar-element">Developers</Link>
        <span> </span>
        <Link to="/posts" className="toolbar-element">Show all the posts</Link>
        <span> </span>
        <Link to="/delete" className="toolbar-element">Killswitch engage</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    login: reduxState.login
  };
}

export default connect(mapStateToProps)(Toolbar);
