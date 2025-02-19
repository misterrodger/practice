import pipe from 'lodash/fp/pipe.js';
import filter from 'lodash/fp/filter.js';

const users = [
  { name: 'Alex', email: 'alex@example.com', uid: '124234', userType: 'admin' },
  { name: 'Beau', email: null, userType: 'user', uid: '152335' },
  { name: 'Charlie', email: 'charlie@char.ly', userType: 'user', uid: '23221' },
  { name: 'Daytona', email: 'dave@dave.io', userType: 'user', uid: '234216' } 
]

const result = pipe(
  filter('email'),
  filter(['name', 'Charlie']),
  filter({name: 'Daytona', userType: 'user'}),
  filter(each => each.name !== 'Alex')
)(users)

console.log(result);