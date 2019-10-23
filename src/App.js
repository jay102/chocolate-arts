import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './components/landingpage/LandingPage';
import Artists from './components/artists/artistsContainer';
import Albums from './components/albums/albumsContainer';

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/albums/:id" component={Albums} />
        </Router>
      </>
    );
  }
}

export default App;