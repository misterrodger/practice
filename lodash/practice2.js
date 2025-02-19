import pipe from 'lodash/fp/pipe.js';
import filter from 'lodash/fp/filter.js';
import tap from 'lodash/fp/tap.js';
import map from 'lodash/fp/map.js';
import pick from 'lodash/fp/pick.js';
import groupBy from 'lodash/fp/groupBy.js';

const users = [
  { name: 'Alex', email: 'alex@example.com', uid: '124234', userType: 'admin' },
  { name: 'Beau', email: null, userType: 'user', uid: '152335' },
  { name: 'Charlie', email: 'charlie@char.ly', userType: 'user', uid: '23221' },
  { name: 'Daytona', email: 'dave@dave.io', userType: 'user', uid: '234216' } 
]

const mapNameToAllCaps = (arr) => arr.map(each => ({
  ...each, name: each.name.toUpperCase()
}));

const getName = ({name}) => name; 

const result2 = pipe(
  filter('email'),
  tap(console.log),
  mapNameToAllCaps,
  // map(getName)
  map(pick(['name', 'email', 'userType'])),
  groupBy('userType')
)(users)

console.log(result2);
