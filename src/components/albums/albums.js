import React from 'react';
import './albums.css'

const Albumbs = (props) => {
  return (
    <>
      <header>
        <div className="bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              <strong>Album</strong>
            </a>
          </div>
        </div>
      </header>

      <main role="main">

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Artist Name</h1>
            <small><i className="fab fa-twitter" style={{ color: "blue" }}></i>tweets</small>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row">
              {props.photos}
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default Albumbs;