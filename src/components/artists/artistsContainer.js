import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './artists.css'

// import view for artist
import ArtistView from './Artists';

// import service class
import { artistService } from '../../services';


class ArtistsContainer extends Component {
  state = {
    artists: []
  }

  componentDidMount() {
    this.getArtists();
  }


  getArtists = async () => {
    const artists = await artistService.getallartists();
    this.setState({ artists })
  }

  render() {
    const { artists } = this.state;
    const AllArtists = artists.map(artists => {
      return (
        <tbody key={artists.id}>
          <tr>
            <td>{artists.id}</td>
            <td>{artists.name}</td>
            <td>{artists.email}</td>
            <td style={{ fontSize: "0.72rem" }}>
              <Link className="btn btn-primary" to={`/albums/${artists.id}`} >View Albums</Link></td>
          </tr>
        </tbody>
      );
    });
    return (
      <ArtistView
        artists={AllArtists} />
    );
  }
}

export default ArtistsContainer;