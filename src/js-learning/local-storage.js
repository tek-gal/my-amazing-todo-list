/* eslint-disable */

// localStorage ассоциируется только с текущем доменом
// отличия от куки: localStorage - размер до 5 мб;
// куки улетают на сервак с запросами, что не безопасно тк сервер может это распарсить и использовать
// localStorage икуда не улетает и хранится только у клиента
const myNumber = 42;
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber.toString())  // works with strings only
console.log(localStorage.getItem('number'))
console.log(localStorage)

const obj = {
  name: 'Max',
  age: 20,
}


// событие вызывается в однай вкладке, если в другой вкладке записаны данные в localStorage
// используется для синхронизации вкладок
window.addEventListener('storage', (event) => console.log(event))
localStorage.setItem('person', JSON.stringify(obj))
