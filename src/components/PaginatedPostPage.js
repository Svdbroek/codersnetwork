import React, { Component } from 'react';

class PaginatedPostPage extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default PaginatedPostPage;