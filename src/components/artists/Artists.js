import React from 'react';

const Artists = (props) => {
  return (
    <div className="container">
      <h5 className="all-artists">ALL ARTISTS</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Artist Name</th>
            <th>Artist Email</th>
          </tr>
        </thead>
        {props.artists}
      </table>
    </div>

  );
}

export default Artists;