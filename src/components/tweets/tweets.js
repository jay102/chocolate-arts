import React from 'react';

const Comments = (props) => {
  return (
    <div className="container">
      <div>
        <form>
          <div className={'form-group' + (props.name && !props.tweet ? ' has-error' : '')}>
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter name" name="name" />
          </div>
          <div className={'form-group' + (props.name && !props.tweet ? ' has-error' : '')}>
            <label for="exampleInputPassword1">Tweet</label>
            <input type="text" class="form-control" id="tweet" placeholder="tweet" name="tweet" />
          </div>
          <button type="submit" className="btn btn-primary">Create tweet</button>
        </form>
      </div>
      <h5 className="all-artists">ALL Comments</h5>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>comment</th>
          </tr>
        </thead>
        {props.alltweets}
      </table>
    </div>
  );
}

export default Comments;