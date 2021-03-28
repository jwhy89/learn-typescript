// all generic data types are written inside "<>"
// generics allow us to provide different data types
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface GenericUserInterface<T, V> {
    name: string
    data: T;
    meta?: V;
}

const userFour: GenericUserInterface<{meta: string}, string> = {
    name: 'Jack',
    data: {
        meta: "foo",
    },
    meta: "bar",
};

type AdditionProperty = string;

// explicit declarations are easier to read
const result = addId(userFour);
console.log("result", result);

const resultTwo = addId(userFour);
console.log("resultTwo", resultTwo);

const userFive: GenericUserInterface<string[], string> = {
    name: 'John',
    data: ['Foo', 'Bar', 'Baz'],
};