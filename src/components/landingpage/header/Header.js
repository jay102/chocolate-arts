import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className="header masthead" style={{ backgroundColor: "#333" }}>
      <div className="container">
        <h3 className="masthead-brand">Chocolate City</h3>
        <div className="view-artists">
          <Link className="btn btn-lg btn-primary" to="/artists">View all Artists</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;