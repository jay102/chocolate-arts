export const albumService = {
  getartistalbums,
  getalbumphotos
};
const baseUrl = "https://jsonplaceholder.typicode.com"
function getartistalbums() {
  return fetch(`${baseUrl}/albums`).then(res => res.json());
}

function getalbumphotos(id) {
  return fetch(`${baseUrl}/albums/${id}/photos?_start=0&_limit=9`).then(res => res.json());
}


