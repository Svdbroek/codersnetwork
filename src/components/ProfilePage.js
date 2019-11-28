import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProfile} from '../store/ProfilePage/actions'
import {Link} from 'react-router-dom'
import Post from './Post'

function mapStateToProps(state) {
    return { profile : state.profileInfo

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
        return (
            <div>
                {(id === this.props.match.params.id) ? <button>Update Profile</button>: <br/>}
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