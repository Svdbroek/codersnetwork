import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class updateProfile extends Component {
    render() {
        return (
            <div>
                test
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(updateProfile);