// Creating a function that calls another function
let arr = [5, 5];
function getSum(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}

function getAverage(arr) {
  sum = getSum(arr);
  return sum / arr.length;
}

console.log(getAverage(arr));
