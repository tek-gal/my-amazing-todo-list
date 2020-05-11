/* eslint-disable */

const url = 'https://jsonplaceholder.typicode.com/users';



function sendRequiest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader(
      'Content-Type', 'application/json',
    );

    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
        resolve(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

sendRequiest('GET', url)
  .then((data) => console.log(data))
  .catch((err) => console.error(error));

sendRequiest('POST', url, {
  name: 'me',
  age: 24,
})
  .then((data) => console.log(data))
  .catch((err) => console.error(error));
