// Question 1
const arrayOfNumbers = [2, 3, 4, 10, 8, 99];
function doesArrayContain(array, number) {
  for (currentNum of array) {
    if (currentNum === number) {
      return true;
    }
  }
  return false;
}
// console.log(doesArrayContain(arrayOfNumbers, 100));

// Question 2
const numbersToSum = [2, 2, 2];
function sumOfProperties(array) {
  let sum = 0;
  let average = 0;
  for (num of array) {
    sum += num;
  }
  return (average = sum / array.length);
}
// console.log(sumOfProperties(numbersToSum));

// Question 3
const numbers = [8, 3, 2, 6, 7, 5];

function createObj(arr) {
  let bigNum = arr[0];
  let smallNum = arr[0];
  let finalObj = {};

  for (number of arr) {
    if (number >= bigNum) {
      bigNum = number;
      finalObj.biggestNumber = bigNum;
    }
    if (number <= smallNum) {
      smallNum = number;
      finalObj.smallestNumber = smallNum;
    }
  }
  finalObj.average = (finalObj.biggestNumber + finalObj.smallestNumber) / 2;
  return finalObj;
}
// console.log(createObj(numbers));

// Question 4
const array1 = [1, 2, 3, 4];
const array2 = ['a', 'b', 'c', 'd'];

function combineArrays(arr1, arr2) {
  const maxLength = Math.max(array1.length, array2.length);
  let finalArray = [];
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      finalArray.push(arr1[i]);
    }
    if (i < arr2.length) {
      finalArray.push(arr2[i]);
    }
  }
  return finalArray;
}

function combineArrays2(arr1, arr2) {
  const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  let finalArray = [];
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      finalArray[finalArray.length] = arr1[i];
    }
    if (i < arr2.length) {
      finalArray[finalArray.length] = arr2[i];
    }
  }
  return finalArray;
}
// console.log(combineArrays2(array1, array2));
