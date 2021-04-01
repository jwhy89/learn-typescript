import * as R from 'ramda'

const updatedArray = R.append<string>('baz', ['foo', 'bar'])

console.log('updatedArray', updatedArray)

const searchStr = 'bar'
const hasSearchedString = R.any<string>((a: string) =>
  R.contains(searchStr, ['fooooo', 'bar', 'baz']),
)

console.log('hasSearchedString', hasSearchedString(updatedArray))
