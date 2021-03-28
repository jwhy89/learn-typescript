let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Monster", "foo"));

type ID = number;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser {
    id: ID;
    userName: string;
    age?: number;
    getMessage(): string;
}

const user: IUser = {
    id: 1,
    userName: "Monster",
    age: 30,
    getMessage() {
        return "Hello " + this.userName;
    }
}

const userTwo: IUser = {
    id: 2,
    userName: "Jack",
    getMessage() {
        return "Hello " + this.userName;
    }
}

console.log(userTwo.getMessage());
console.log((user.getMessage()));

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";