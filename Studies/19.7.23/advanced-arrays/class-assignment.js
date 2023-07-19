let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doSomething(arr, startPoint, length) {
  let newArr = [];
  for (let i = 0; i < startPoint; i++) {
    newArr.push(arr[i]);
  }
  for (let i = startPoint + length; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const cutArr = (arr, startPoint, length) => {
  return arr.slice(0, startPoint).concat(arr.slice(startPoint + length));
};

console.log(doSomething(testArr, 2, 3));
console.log(cutArr(testArr, 2, 3));
