import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteAccount} from '../store/deleteAccount/actions'

function mapStateToProps(reduxState) {
    return {
        login: reduxState.login


    };
}


class DeleteAccount extends Component {
    clickHandler = event =>{
        event.preventDefault();
        console.log("deleting")
        console.log(this.props.login)
        this.props.dispatch(deleteAccount(this.props.login.profile.id, this.props.login.accessToken.jwt))
    }

    componentDidMount(){
        console.log('router props', this.props)

    }
    
    render() {
        return (
            <div>
                <span> THERE IS NO WAY BACK </span>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.clickHandler}> Delete your account (CAREFULL!!!)</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(DeleteAccount);