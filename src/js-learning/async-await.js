const delay = (time) => new Promise(
  (resolve) => setTimeout(() => resolve(), time),
);

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = () => delay(2000)
  .then(() => fetch(url))
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((e) => console.error(e));

async function asyncFetchTodos() {
  try {
    await delay(2000);
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.error(e);
  }
}

fetchTodos();
asyncFetchTodos();
