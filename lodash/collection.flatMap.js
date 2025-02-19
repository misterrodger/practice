import pipe from 'lodash/fp/pipe.js';
import flatMap from 'lodash/fp/flatMap.js';

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = pipe(
  flatMap((each) => each > 30
  ? [each]
  : []),

)(users[0])

console.log(result);
