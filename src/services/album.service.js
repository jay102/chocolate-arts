export const userService = {
  getartistalbums,
  getalbumphotos
};
const baseUrl = "https://jsonplaceholder.typicode"
function getartistalbums() {
  return fetch(`${baseUrl}/albums`).then(res => {
  });
}

function getalbumphotos(id) {
  return fetch(`${baseUrl}/albums/${id}/photos`).then(res => {
  });
}


