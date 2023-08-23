'use strict';

function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

//-- O(n) --//
function func1(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  const p = n - 1;
  func1(p);
}
// func1(10);

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(3));
