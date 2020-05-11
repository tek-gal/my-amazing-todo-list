/* eslint-disable */

const url = 'https://jsonplaceholder.typicode.com/users';


function sendRequiest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const config = { method, headers };
  if (body !== null) config.body = JSON.stringify(body);

  return fetch(url, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((error) => {
        const e = new Error('Something went wrong!');
        e.data = error;
        throw e;
      });
    });
}

sendRequiest('GET', url)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

sendRequiest('POST', url, {
  name: 'me',
  age: 24,
})
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
