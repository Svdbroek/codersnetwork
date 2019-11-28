import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProfile} from '../store/ProfilePage/actions'
import {Link, Redirect} from 'react-router-dom'
import Post from './Post'


function mapStateToProps(state) {
    return { profile : state.profileInfo,
            login: state.login,

    };
}

class ProfilePage extends Component {
   
    componentDidMount(){
        const userId = this.props.match.params.id
        this.props.dispatch(getProfile(userId))
    }

    render() {
        console.log(this.props.match.params.id)
        if (!this.props.profile){return <p>loading...</p>}
        const {name, intro, github_username, website, createdAt,technologies, posts, id} =this.props.profile
        console.log(id, this.props.login.profile.id)
        return (
            <div>
                {(id === this.props.login.profile.id) ? <Link to="/updateProfile">Update Profile</Link>: <br/>}
                <h1>{name}</h1>
                <h4>{intro}</h4>
                <p><strong>Github: </strong>{github_username}</p>
                {website? (<p><strong>Website: </strong> <a href={website}>{website}</a></p>):(<br/>)}
                <p><strong>Created at: </strong>{createdAt}</p>
                <p><strong>technologies: </strong>{technologies}</p>
                <p><strong>Posts: </strong></p>
                <p>{posts.map(post => <Link to={`/posts/${post.id}`}><Post key={post.id} title={post.title} /></Link>)}
                </p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ProfilePage);