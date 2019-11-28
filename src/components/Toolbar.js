import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
class Toolbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <span></span>
                {!this.props.login.profile?  <Link to="/login">Login</Link>: <span>{this.props.login.profile.name}</span>}
               <span></span> <Link to="/developers">developers</Link> 
<Link to="/delete">killswitch engage</Link>
            </div>
        )
    }
}


function mapStateToProps(reduxState) {
    return {
      login: reduxState.login
    };
  }

export default connect(mapStateToProps)(Toolbar)