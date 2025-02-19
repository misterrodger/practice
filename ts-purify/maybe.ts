import { Maybe, Just, Nothing } from 'purify-ts/Maybe';


const justValue = Maybe.of(5)
  .map(x => x * 5)
  .chain((x) => Maybe.of(x * 6))
  .extract()
  // .orDefault(42)
  // .chain((x) => Maybe.of(x * 2))
  // .extract()

console.log('justValue: ', justValue)

const value = 123;

const result = Just('start value')  // Just definitely a value, wraps it in a monad. Use Maybe if possibly undefined. Nothing is definitely nothing 
.map((x) => x.toUpperCase())
.caseOf({ Nothing: (y) => y, Just: (x) => x})
// .toList()
// .orDefault('default')
  // .caseOf({ Left: (l: any) => 'error message', Right: (x: any) => x})
console.log(result)

const result2 = Maybe.of(123)  // .of wraps it in a Just
.caseOf({ Nothing: (y) => y, Just: (x) => x})

console.log(result2)

const result3 = Maybe.fromNullable<number>(0)  // or fromFalsy returns Nothing if null/undefined, else Just
.caseOf({ Nothing: () => 'was an error', Just: (x) => x})

console.log(result3)

const result4 = Maybe.encase(() => { return 'ok'} )
.ap(Just(x => x + 1))
.chain(x => x)
// .caseOf({ Nothing: (y) => y, Just: (x) => x } )

console.log(result4)
// Maybe.empty/.zero - returns Nothing
