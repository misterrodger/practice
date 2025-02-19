import get from 'lodash/fp/get.js';

const obj = {
  user: {
    name: 'Steve'
  }
}

const result = get('user.name')(obj)
console.log(result)  // 'Steve'
