const students = [
  { name: '1', age: 25, score: 100 },
  { name: '2', age: 35, score: 90 },
  { name: '3', age: 17, score: 80 },
  { name: '4', age: 16, score: 80 },
  { name: '5', age: 19, score: 80 },
];

// .filter - Returns the elements of an array that meet the condition specified in a callback function.
const arrowFilteredStudents = students.filter((student) => student.age >= 18);
// console.log(arrowFilteredStudents);

// .find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const lessThan19 = students.find((student) => student.age < 19);
// console.log(lessThan19);

// .map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

let tblBody = students
  .map(
    (student) =>
      `<tr><td>${student.name}</td><td>${student.age}</td><td>${student.score}</td></tr>`
  )
  .join('');

document.querySelector('#students-tbl tbody').innerHTML = tblBody;
