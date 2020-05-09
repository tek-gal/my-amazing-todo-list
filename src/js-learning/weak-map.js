/* eslint-disable */

let obj = {
  name: 'me',
};

const arr = [obj];
const map = new Map([[obj, 'exists']]);
const weakMap = new WeakMap([[obj, 'exists']]);

obj = null;
console.log(obj);
console.log(arr);
console.log(map);
console.log(weakMap);
console.log('weakMap.get(obj) =', weakMap.get(obj));
const obj2 = { name: 'me2' };
weakMap.set(obj2, Date.now())
console.log('weakMap after set = ', weakMap)
console.log('weakMap.has(obj2) = ', weakMap.has(obj2))
console.log('weakMap.get(obj2) = ', weakMap.get(obj2))
