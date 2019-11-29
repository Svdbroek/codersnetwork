import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../store/deleteAccount/actions'

function mapStateToProps(reduxState) {
    return {
        login: reduxState.login


    };
}


class DeleteAccount extends Component {
    clickHandler = event => {
        event.preventDefault();
        this.props.dispatch(deleteAccount(this.props.login.profile.id, this.props.login.accessToken.jwt))
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1> Are you sure you want to delete your account? </h1>
                <br />
                <br />
                <button onClick={this.clickHandler}> Delete your account (CAREFULL!!!)</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(DeleteAccount);