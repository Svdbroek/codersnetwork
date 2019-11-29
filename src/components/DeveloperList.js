// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import { fetchDevelopers } from "../store/developers/actions";
import Developer from "./Developer";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  state = {
    searchWord: ''
  }
  componentDidMount() {
    this.props.dispatch(fetchDevelopers);
  }
  handleChange = (event) => {
    console.log('event change', event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h1>Codaisseur developers</h1>
        <p>Search for developer:</p> <input name="searchWord" value={this.state.searchWord} onChange={this.handleChange} />
        {
          loading
            ? <p>Loading...</p>
            : <div><p>We have {this.state.searchWord.length === 0 ? this.props.devs.count : this.props.devs.rows.filter((object) => object.name.indexOf(this.state.searchWord) !== -1).length} developers!</p>
              {this.state.searchWord.length === 0 && this.props.devs.rows.map((object) => { return <Developer name={object.name} email={object.email} id={object.id} /> })}

              {this.state.searchWord.length !== 0 && this.props.devs.rows.filter((object) => object.name.indexOf(this.state.searchWord) !== -1)
                .map(object => <Developer name={object.name} email={object.email} id={object.id} />)}
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    devs: reduxState.developers
  }
}

export default connect(mapStateToProps)(DevelopersList);

// {this.state.searchWord.length !== 0 && this.props.devs.rows.filter((object) => object.name.indexOf(this.state.searchWord) !== -1)
//   .map(object => <Developer name={object.name} email={object.email} id={object.id} />)}