/* eslint-disable */

const users = [
  { name: 'user1' },
  { name: 'user2' },
  { name: 'user3' },
  { name: 'user4' },
];
const visits = new WeakSet();

visits
  .add(users[0])
  .add(users[1])
  .add(users[2])
  .add(users[3])
  .add(users[3]);

console.log(visits)
console.log(visits.has(users[0]))
console.log('visits.has(users[3])', visits.has(users[3]))


users.splice(2, 1)
console.log('after deleting')
console.log('visits.has(users[3])', visits.has(users[3]))
