/* eslint-disable */

//
// const person = {
//   name: 'Vladilen',
//   age: 25,
//   job: 'fullstack',
// };
//
// const op = new Proxy(person, {
//   get(target, prop) {
//     console.log('prop', prop);
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error('no such prop!');
//     }
//   },
//   has(target, prop) {
//     return Object.keys(target).includes(prop);
//   },
//   deleteProperty(target, prop) {
//     console.log('deleting...', prop);
//     delete target[prop];
//     return true;
//   },
// });
//
// console.log(op.name);
// // op.wow = 'error';
// console.log('wow' in op);
// delete op.job;
//
// const log = (text) => `Log: ${text}`;
// const fp = new Proxy(log, {
//   apply(target, context, args) {
//     console.log('colling apply...');
//     return target.apply(context, args);
//   },
// });
//
// console.log(fp.apply(null, ['wow!']));
//
//
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const PersonProxy = new Proxy(Person, {
//   construct(Target, args) {
//     console.log('constructing...');
//     return new Proxy(new Target(...args), {
//       get(target, prop) {
//         console.log('getting proxed proxy prop...');
//         return target[prop];
//       },
//     });
//   },
// });
//
// const proxedPerson = new PersonProxy('me', 24);
// console.log(proxedPerson.name);
//
//


// wrapper

const withDefaultValue = (target, defaultValue) => new Proxy(target, {
  get(target2, prop) {
    if (prop in target2) return target2[prop];
    return defaultValue;
  },
});

const p = withDefaultValue({ x: 10, y: 20 }, 0);
console.log('x', p.x);
console.log('y', p.y);
console.log('z', p.z);

// hidden proposal

const withHiddenProps = (target, prefix = '_') => new Proxy(target, {
  has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
  ownKeys: (obj) => Reflect.ownKeys(obj).filter((prop) => !prop.startsWith(prefix)),
  get: (obj, prop, receiver) => ((prop in receiver)
    ? obj[prop]
    : undefined),
});

const data = withHiddenProps({ show: 'shown', _hide: 'hidden' });

console.log('keys', Object.keys(data));
console.log('has _hide', '_hide' in data);
console.log('get _hide', data._hide);


// optimization

const userData = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'e' },
];

// const index = {};
// userData.forEach((item) => { index[item.id] = item; });

const IndexArray = new Proxy(Array, {
  construct(Class, [args]) {
    const index = {};
    args.forEach((i) => { index[i.id] = i; });
    return new Proxy(new Class(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexArray(userData);
console.log(users.findById(3));
