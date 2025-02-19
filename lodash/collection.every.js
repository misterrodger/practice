import pipe from 'lodash/fp/pipe.js';
import some from 'lodash/fp/some.js'

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

const result = pipe(
  some('active')
)(users);

console.log(result);