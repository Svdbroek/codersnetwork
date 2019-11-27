import React, { Component } from 'react'


export default class Developer extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>e-Mail:{this.props.email}</p>
            </div>
        )
    }
}
