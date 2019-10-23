import React, { Component } from 'react';
// import service
import { albumService } from '../../services'

import Albums from './albums';

class AlbumsContainer extends Component {
  state = {
    albums: []
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.gePhotos(id)
  }

  gePhotos = async (id) => {
    const albums = await albumService.getalbumphotos(id);
    this.setState({ albums })
  }
  render() {
    const { albums } = this.state;
    const AllAlbumsPhotos = albums.map(album => {
      return (
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={album.thumbnailUrl} alt="album" />
            <div className="card-body">
              <p className="card-text">{album.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Albums
        photos={AllAlbumsPhotos}
        id={this.props.match.params.id} />
    );
  }
}

export default AlbumsContainer;