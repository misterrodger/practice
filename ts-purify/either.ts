import { Either, Left, Right } from 'purify-ts/Either';

const add = num => num + 1

const isEven = num => num % 2 === 1
  ? Right(num)
  : Left('oh no')

const res = Either.of(10)
  .map(add)
  .chain(isEven)
  // .swap()
  .extract()


