import pipe from 'lodash/fp/pipe.js';
import forEach from 'lodash/fp/forEach.js'

const users = { 'user': 'barney', 'age': 36, 'active': false }

const result = pipe(
  forEach((value) => {
    if (value === 36) return false;
    console.log(`value is ${value}`)
  }))(users);

console.log(result);