import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile , updateProfile} from "../store/ProfilePage/actions";
import { Link } from "react-router-dom";
import Post from "./Post";


function mapStateToProps(state) {
  return { profile: state.profileInfo, login: state.login };
}

class ProfilePage extends Component {
  state = {
    edit: false,
    name: "",
    website: "",
    technologies: "",
    github: "",
    intro: "", 
  };

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(getProfile(userId));
  }

  editProfile = event => {

    event.preventDefault();
    this.setState({ edit: true });
    this.setState({name: this.props.login.profile.name, intro: this.props.login.profile.intro, github:this.props.login.profile.github_username, website:this.props.login.profile.website, technologies:this.props.login.profile.technologies})

  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event =>{
      event.preventDefault();
      console.log ('submitting')
      const userId = this.props.match.params.id;
        const jwt = this.props.login.accessToken.jwt
      const {
        name,
        intro,
        github,
        website,
        technologies
      } =this.state


      this.props.dispatch(updateProfile(name,intro, github, website, technologies,userId,jwt))
      this.setState({edit:false})
  }

  render() {
    console.log(this.props.match.params.id);
    if (!this.props.profile) {
      return <p>loading...</p>;
    }
    const {
      name,
      intro,
      github_username,
      website,
      createdAt,
      technologies,
      posts,
      id
    } = this.props.profile;

    console.log(id, this.props.login.profile.id);
    if (this.state.edit) {
      return (
        <div>
          :D
          <form onSubmit ={this.handleSubmit}>
            <p>Name: <input type="name" name ="name" value ={this.state.name} onChange={this.handleChange}  /></p>
            <p>Intro: <input type="intro" name ="intro" value ={this.state.intro} onChange={this.handleChange}  /></p>
            <p>
              <strong>Github: </strong> <input type="github" name ="github" value ={this.state.github} onChange={this.handleChange}  />
            </p>

              <p>
                <strong>Website: </strong> <input type="website" name ="website" value ={this.state.website} onChange={this.handleChange}  />
              </p>
            <p>
              <strong>technologies: </strong>
              <input type="technologies" name ="technologies" value ={this.state.technologies} onChange={this.handleChange}  />
            </p>
           
            <p>
              <strong>Created at: </strong>
              {createdAt}
            </p>
           <button>submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          {id === this.props.login.profile.id ? (
            <button onClick={this.editProfile}>Update Profile</button>
          ) : (
            <br />
          )}
          <h1>{name}</h1>
          <h4>{intro}</h4>
          <p>
            <strong>Github: </strong>
            {github_username}
          </p>
          {website ? (
            <p>
              <strong>Website: </strong> <a href={website}>{website}</a>
            </p>
          ) : (
            <br />
          )}
          <p>
            <strong>technologies: </strong>
            {[technologies]}
          </p>
          <p>
            <strong>Created at: </strong>
            {createdAt}
          </p>
          <p>
            <strong>Posts: </strong>
          </p>
          <p>
            {posts.map(post => (
              <Link to={`/posts/${post.id}`}>
                <Post key={post.id} title={post.title} />
              </Link>
            ))}
          </p>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(ProfilePage);
