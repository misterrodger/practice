import { Maybe, Just, Nothing} from 'purify-ts/Maybe';

const multiply = (num) => {
  console.log('called multiply');
  return Just(num * 2)  // chain unwraps, so you have to re-wrap or use something else (i.e. map)
  // return Nothing  // return Nothing at anytime and it will fall through the rest
  // return num * 2  // this would be unwrapped (i.e. not in a Monad)
}

const divide = (num) => {
  console.log('called divide')
  return num / 6    // just do transform and return the value
  // return Nothing   // this breaks
}

const add = (num) => {
  return Just(16)
}

const result1 = Maybe.of(42)
  .map(divide)  // re-wraps the return
  .chain(multiply)  // the return is unwrapped
  // .extend(add)  // not sure, seems the same as chain?
  // .ap(Just(x => x + 1))  // you have to write it like this - it maps with a Maybe function.  not sure the use
  .filter(x => x > 10)  // returns Nothing if false
  // .join()  // unwraps, so not really just for returning the value
  // .mapOrDefault(x => x + 1, 42)
  .extract()  // extract gets the value whether it's wrapped (.map) or unwrapped (.chain)
  // .toList()
  // .equals(Just(13))  // returns boolean
  // .isNothing()  // returns boolean

console.log(result1);

const result2 = Maybe.encase(() => {
  throw new Error()
  // return 'ok'
  }).extract()

console.log(result2)

