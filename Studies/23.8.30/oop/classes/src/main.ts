// class
class User {
  userId: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(
    userId: string,
    pass: string,
    firstName?: string,
    lastName?: string,
    age = 23
  ) {
    this.userId = userId;
    this.password = pass;
    this.firstName = firstName || 'Edo';
    this.lastName = lastName || 'Mathias';
    this.age = age;
  }
}

// instance
const user1 = new User('abc', 'password');
user1.password = 'newPassword'; // will override the first assignment from line 13
// console.log(user1);

const user2 = new User('id1', 'pass1', 'Shira', 'Mathias', 20);
const user3 = new User('id1', 'pass1', undefined, undefined);
// console.log(user2);
// console.log(user3);
