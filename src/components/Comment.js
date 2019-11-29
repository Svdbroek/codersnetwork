import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class comment extends Component {
    render() {
        return (
            <div>
               <p> 
<Link to={`/developer/${this.props.authorId}`}>
                   <strong>{this.props.author}</strong> 
                   </Link> commented:</p>
               <p> {this.props.text}</p>
            </div>
        );
    }
}

export default connect()(comment);


