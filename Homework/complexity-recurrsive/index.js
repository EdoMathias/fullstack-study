//--Question 1--//
const question1Array = [1, 2, 3, 4, 5, 8, 6, 7, 10];
// O(n) -> becase the function's parameter depends on the length of the array
function reSortArray(array) {
  return array.reverse();
}
// console.log(reSortArray(question1Array));

//--Question 2--//
const question2Array = [1, 2, 3];
// O(n^2)
function sumOfOdd(array) {
  let sum = 0;
  const oddNumbers = array.filter((number) => number % 2 !== 0);
  oddNumbers.map((number) => (sum += number));
  return sum;
}
// console.log(sumOfOdd(question2Array));

//--Question 3--//
function sumOfNumber(number) {
  if (number === 0) {
    return 0;
  }
  const digit = Math.floor(number % 10);
  return digit + sumOfNumber(number / 10);
}
// console.log(sumOfNumber(12));
// console.log(sumOfNumber(1010));
// console.log(sumOfNumber(505));

//--Question 4--//
function returnBiggest(number) {
  if (number === 0) {
    return 0;
  }
  const digit = Math.floor(number % 10);
  const digit2 = returnBiggest(number / 10);
  return digit > digit2 ? digit : digit2;
}
console.log(returnBiggest(12));
console.log(returnBiggest(321));
console.log(returnBiggest(65748392));
