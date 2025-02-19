import pipe from 'lodash/fp/pipe.js';
import includes from 'lodash/fp/includes.js';

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = pipe(
  includes('fred')
)(users[1])

console.log(result);
