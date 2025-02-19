import { Maybe, Just, Nothing} from 'purify-ts/Maybe';

const input = [
  {name: 'steve', age: 20, id: 1},
  {name: 'bob', age: 25, id: 2},
  {name: 'mary', age: 20, id: 3},
  {name: 'james', age: 20, id: 4},
]

// const reducer = 

const result1 = Maybe.of(input)
  // .chainNullable(x => x.map(({name}) => name))  // this seems to be different from regular 'chain'
  .extract()
  // .reduce((acc, curr) => acc + curr[2].id, 0)  // this works, but differently than regular reduce

console.log(result1)


const arr = [1, 'word', 3]

const mapFunc = x => typeof x === 'number'
  ? Just(x)
  : Nothing

const result2 = Maybe.mapMaybe(mapFunc, arr)
console.log(result2)

const arr2 = [Just(1), Just(3)]

const result3 = Maybe.sequence(arr2)
  .extract()
console.log(result3);

const result4 = Maybe.isMaybe(Nothing)
console.log(result4);
