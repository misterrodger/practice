import pipe from 'lodash/fp/pipe.js';
import find from 'lodash/fp/find.js';

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = pipe(
  find('active'),
  find(['user', 'fred']),
  find({user: 'barney', active: false}),
  find(each => each.user.length === 4)
)(users)

console.log(result);
