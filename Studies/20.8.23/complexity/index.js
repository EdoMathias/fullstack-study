'use strict';

const arr = [2, 4, 5, 6, 9, 12, 1];

//-- O(n) --//
// O(n) => n + c
// number of actions is defined by the parameters of the functions, plus,
// extra lines of codes to be executed.
// !in this example! => n = number of items in array
// c = the other lines to be executed outside of the loop
function arrSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

//-- O(1) --//
// Number of actions is not defined by the parameters of the function.
function giveMeIndex(arr, indexNum) {
  return arr[indexNum];
}
// console.log(giveMeIndex(arr, 5));

//-- O(n) --//
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// console.log(sum(10));

//-- O(1) --//
function sum1(n) {
  return (n * (n + 1)) / 2;
}
// console.log(sum1(10));

//--  --//
function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}
// console.log(factorial(3));

// from chatGPT:
// function factorial1(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial1(n - 1);
//   }
// }
// console.log(factorial1(5));

//-- O(n) --//
function indexOfNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log(`index of num is: ${indexOfNum(arr, 5)}`);
console.log(`index of num is: ${indexOfNum(arr, 18)}`);

const arr1 = [1, 2, 3, 4, 5, 6];
//-- O(logn) --//
//
function indexOfNum1(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
    if (arr[middleIndex] === num) {
      return middleIndex;
    }
    if (num < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// console.log(indexOfNum1(arr1, 3));

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//-- O(n^2) --//
function sumOfAllArrays(arr1, arr2) {
  let sum = 0;
  for (let num1 of arr1) {
    for (let num2 of arr2) {
      sum += num1 * num2;
    }
  }
  return sum;
}
// console.log(sumOfAllArrays(a1, a2));

//-- O(n^2) + O(n) => O(n^2) --//
function sumOfAllArrays1(arr1, arr2) {
  let sum = 0;
  for (let num1 of arr1) {
    for (let num2 of arr2) {
      sum += num1 * num2;
    }
  }
  for (let k of arr1) {
    // .....
  }
  return sum;
}

//-- 5*O(n^2) + O(n) => O(n^2)
//-- 5*O(n^2) + O(n^3) => O(n^3)
// O(n) + O(logn) => O(n)
// O(logn) + O(1) => O(logn)

//---------------------------//

const students = [
  { id: '1', firstName: 'aa1', lastName: 'bb1' },
  { id: '2', firstName: 'aa2', lastName: 'bb2' },
  { id: '3', firstName: 'aa3', lastName: 'bb3' },
  { id: '4', firstName: 'aa4', lastName: 'bb4' },
  { id: '5', firstName: 'aa5', lastName: 'bb5' },
];

//-- O(n) --//
function getStudentById(studentId) {
  for (let student of students) {
    if (student.id === studentId.toString()) {
      return student;
    }
  }
  return `Student does not exist`;
}

//-- O(n) --//
function getStudentById1(studentId) {
  return students.find((student) => studentId === student.id);
}

// if we change the array to a map we can lower the complexity to O(1)
const students2 = {
  1: { id: '1', firstName: 'aa1', lastName: 'bb1' },
  22: { id: '22', firstName: 'aa2', lastName: 'bb2' },
  23: { id: '23', firstName: 'aa3', lastName: 'bb3' },
  45: { id: '45', firstName: 'aa4', lastName: 'bb4' },
  555: { id: '555', firstName: 'aa5', lastName: 'bb5' },
};

//-- O(1) --//
function getStudentById2(studentId) {
  return students2[studentId];
}

console.log(getStudentById2(1));
