import pipe from 'lodash/fp/pipe.js';
import countBy from 'lodash/fp/countBy.js'

const arr = ['111', '111', '1']

const result = pipe(
  countBy('length')
)(arr)

console.log(result);
