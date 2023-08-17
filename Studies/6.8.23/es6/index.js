'use strict';

const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr]; // spread operator
arr[0] = 55;
// console.log(arr1[0]);

let fruits = ['apple', 'banana'];
// const a = fruits[0];
// const b = fruits[1];
let [a, b] = fruits; // a = 'apple //--// b = 'banana'

const [x, y, ...rest] = [10, 20, 30, 40, 50, 60, 70];
const [e, f, , ...restOfArr] = [10, 20, 30, 40, 50, 60, 70];
// console.log(rest);
// console.log(restOfArr);

// let { firstName, lastName } = { firstName: 'aa', lastName: 'bb', age: 33 };
const person = { firstName: 'aa', lastName: 'bb', age: 33 };
let { firstName, lastName, age } = person;
// console.log(firstName);

function printFirstName({ firstName }) {
  console.log(firstName);
}
// printFirstName(person);

const users = [
  { firstName: 'aa1', lastName: 'bb1' },
  { firstName: 'aa2', lastName: 'bb2' },
  { firstName: 'aa3', lastName: 'bb3' },
];
const users1 = [...users]; // shallow copy
const users2 = JSON.parse(JSON.stringify(users));
users[0].firstName = 'cc'; // will change the firstName in users1 as well
console.log(users1[0]);
console.log(users2[0]);

let a1 = 5;
let a2 = 8;
// let temp = a1;
// a1 = a2;
// a2 = temp;
[a1, a2] = [a2, a1];
