import React, { Component } from 'react';

import { tweetService } from '../../services'

import Tweets from './tweets';

import './tweets.css'
class TweetsContainer extends Component {
  state = {
    tweets: [],
    name: "",
    tweet: ""
  }
  componentDidMount() {
    this.getTweets();
  }
  handleChange = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value })
  }
  submitTweet = async (e) => {
    e.preventDefault();
    const { name, tweet } = this.state;
    const obj = {
      name, tweet
    }
    tweetService.createtweet(obj)
    console.log(name, tweet)
  }
  getTweets = async () => {
    const tweets = await tweetService.getalltweets();
    console.log(tweets)
    this.setState({ tweets });
  }

  deleteTweet = async (e, id) => {
    e.preventDefault();
    console.log(id)
    const del = window.confirm('sure you want to delete?');
    if (del) {
      tweetService.deletetweet(id).then(res => {
        if (res.status === 200) {
          alert('Delete successful');
          this.setState({})
        }

      });
    }


  }
  render() {
    const { tweets } = this.state;
    const AllTweets = tweets.map(tweet => {
      return (
        <tbody key={tweet.id}>
          <tr>
            <td>{tweet.id}</td>
            <td>{tweet.body}</td>
            <td style={{ fontSize: "0.72rem" }}>
              <button id="myButton" className="btn btn-sm btn-primary" style={{ marginRight: "5px" }} data-toggle="modal" data-target="#edit" data-backdrop="static" data-keyboard="false">Edit</button>{" "}
              <button id="myButton" onClick={(e) => this.deleteTweet(e, tweet.id)} className="btn btn-sm btn-primary">Delete</button></td>
          </tr>
        </tbody>
      );
    });
    return (
      <Tweets
        alltweets={AllTweets}
        name={this.state.name}
        tweet={this.state.tweet}
        change={this.handleChange}
        submit={this.submitTweet} />
    );
  }
}

export default TweetsContainer;