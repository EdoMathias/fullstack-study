let name1 = 'edo';
console.log(`name1: ${name1}`);

let name2 = name1;
name2 = 'noa';
console.log(`name1: ${name1}`);
console.log(`name2: ${name2}`);

function changeName(name) {
  name += ' volvo';
  console.log(`name: ${name}`);
}

changeName(name1);
console.log(`name1: ${name1}`);

const person = {
  name: 'shira',
  age: 20,
  scores: [1, 2, 3, 4],
};

console.log(`person.name: ${person.name}`);

let newPerson = person;
console.log(`newPerson.name: ${newPerson.name}`);

newPerson.name = 'Ofek';
console.log(`newPerson.name: ${newPerson.name}`);
console.log(`person.name: ${person.name}`);

let name3 = person.name;
console.log(`name3: ${name3}`);

name3 = 'Dima';
console.log(`name3: ${name3}`);
console.log(`person.name: ${person.name}`);

let scores1 = person.scores;
console.log(`scores1: ${scores1}`);
scores1.push(5);
console.log(`scores1: ${scores1}`);
console.log(`person.scores: ${person.scores}`);

const colors1 = ['red', 'green', 'blue'];
const colors2 = ['red', 'green', 'blue'];
const colors3 = colors1;

if (colors1 === colors2) {
  console.log('equal');
} else {
  console.log('nonEqual');
}
if (colors1 === colors3) {
  console.log('equal');
} else {
  console.log('nonEqual');
}
if (colors1[0] === colors2[0]) {
  console.log('equal');
} else {
  console.log('nonEqual');
}

const students1 = [
  { name: 'edo', age: 23 },
  { name: 'noa', age: 23 },
];
const students2 = [
  { name: 'edo', age: 23 },
  { name: 'noa', age: 23 },
];
const student = students1[0];
student.age = 33;

if (students1[0] === student) {
  console.log('equal');
} else {
  console.log('nonEqual');
}

function addItem(arr) {
  arr.push(55);
}
const ids = [1, 2, 3, 4, 5];
addItem(ids);
console.log(ids);
