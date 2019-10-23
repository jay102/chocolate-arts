export const artistService = {
  getallartists,
};
const baseUrl = "https://jsonplaceholder.typicode.com"
function getallartists() {
  return fetch(`${baseUrl}/users`).then(res => res.json());
}


