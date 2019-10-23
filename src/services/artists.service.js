export const userService = {
  getallartists,
};
const baseUrl = "https://jsonplaceholder.typicode"
function getallartists() {
  return fetch(`${baseUrl}/users`).then(res => {
  });
}


