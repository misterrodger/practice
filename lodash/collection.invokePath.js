import pipe from 'lodash/fp/pipe.js';
import invokeMap from 'lodash/fp/invokeMap.js';

const users = ['steve', 'bob'];

const result = pipe(
  invokeMap('toUpperCase')  // [ 'STEVE', 'BOB' ]
)(users)

console.log(result);


const obj = {
  a: [3, 4, 5],
  b: [1, 2],
  c: [3, 4, 5, 6]
};

const result2 = pipe(
  invokeMap('length')
)(obj)

console.log(result2);