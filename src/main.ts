let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Monster", "foo"));

interface IUser {
    userName: string;
    age?: number;
    getMessage(): string;
}

const user: IUser = {
    userName: "Monster",
    age: 30,
    getMessage() {
        return "Hello " + this.userName;
    }
}

const userTwo: IUser = {
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