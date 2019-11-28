import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Developer extends Component {
    render() {
        return (
            <div>
               <Link to={`/developer/${this.props.id}`} >Name: {this.props.name}</Link> 
                <p>e-Mail:{this.props.email}</p>
            </div>
        )
    }
}


