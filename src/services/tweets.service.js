export const tweetService = {
  getalltweets,
  createtweet,
  updatetweet,
  deletetweet
};
const baseUrl = "https://jsonplaceholder.typicode.com"
function getalltweets() {
  return fetch(`${baseUrl}/comments`).then(res => {
  });
}

function createtweet(tweet) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tweet)
  };
  return fetch(`${baseUrl}/comments`, requestOptions).then(res => res.json());
}

function updatetweet({ tweet, id }) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tweet)
  };
  return fetch(`${baseUrl}/comments/${id}`, requestOptions).then(res => res.json());
}

function deletetweet(id) {
  return fetch(`${baseUrl}/comments/${id}`);
}

