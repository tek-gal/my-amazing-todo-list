/* eslint-disable */

const obj = {
  name: 'me',
  age: 24,
  job: 'engineer',
};

const entries = Object.entries(obj);

const map = new Map(entries);

console.log(obj);
console.log(map);
map.delete('job');
console.log(map);
// map.clear();
// console.log(map);


for (let [key, value] of map) {
  console.log(key, value)
}

console.log(map.values());
console.log(map.keys());
map.forEach((entry) => console.log(entry));


//

const arr = [...map];
console.log(arr);

//
const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'},
];

const visits = new Map();
visits
  .set(users[0], new Date())
  .set(users[1], new Date())
  .set(users[2], new Date())
console.log(visits);
