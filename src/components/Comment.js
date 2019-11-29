import React, { Component } from 'react';
import { connect } from 'react-redux';


class comment extends Component {
    render() {
        return (
            <div>
               <p> <strong>{this.props.author}</strong> commented:</p>
               <p> {this.props.text}</p>
            </div>
        );
    }
}

export default connect()(comment);