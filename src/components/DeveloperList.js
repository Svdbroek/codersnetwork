// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import { fetchDevelopers } from "../store/developers/actions";
import Developer from "./Developer";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDevelopers);
  }

  render() {
    const loading = !this.props.devs;

    return (
      <div>
        <h1>Codaisseur developers</h1>
        {
          loading
            ? <p>Loading...</p>
            : <div><p>We have {this.props.devs.count} developers!</p>

              {this.props.devs.rows.map((object) => { return <Developer name={object.name} email={object.email} id={object.id} /> })}
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