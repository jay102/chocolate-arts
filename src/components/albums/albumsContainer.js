import React, { Component } from 'react';

import Albums from './albums';

class AlbumsContainer extends Component {

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id);
  }
  state = {}
  render() {
    return (
      <Albums />
    );
  }
}

export default AlbumsContainer;