const hello = 'world'

const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname
}

console.log(getFullName('Monster', 'foo'))

type ID = number
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface IUser {
  id: ID
  userName: string
  age?: number
  getMessage(): string
}

const user: IUser = {
  id: 1,
  userName: 'Monster',
  age: 30,
  getMessage() {
    return 'Hello ' + this.userName
  },
}

const userTwo: IUser = {
  id: 2,
  userName: 'Jack',
  getMessage() {
    return 'Hello ' + this.userName
  },
}

console.log(userTwo.getMessage())
console.log(user.getMessage())

const username = 'alex'

const pageName: string | number = '1'

const errorMessage: string | null = null

const popularTags: PopularTag[] = ['dragon', 'coffee']

const dragonsTag: MaybePopularTag = 'dragon'

const doSomething = (): void => {
  console.log('doSomething')
}

const doSomethingNever = (): never => {
  throw 'never'
}

const vAny: any = 10
const vUnknown: unknown = 10

const s1: string = vAny
const s2: string = vUnknown as string

// console.log(vAny.foo());
// console.log(vUnknown.foo());

const pageNumber = '1'
const numericPageNumber: number = (pageNumber as unknown) as number
