// classes are sugar around prototypes
// properties on classes are public by default
// protected is allowed in class and its children

interface UserInterface {
    getFullName(): string;
}
class User implements UserInterface {
    protected firstName: string;
    private lastName: string;
    readonly unchangeableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnchangeableName(): void {
        // this.unchangeableName = 'foo'
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

class Admin extends User {
    private editor: string

    setEditior(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const userThree = new User('Monster', 'lessons');
console.log(userThree.getFullName());

// userThree does not have access to User property maxAge
// console.log(userThree.maxAge)

// but class User does have access
console.log(User.maxAge);

const admin = new Admin('Foo', 'Bar');
console.log(admin)