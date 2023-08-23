// function func1() {
//   func2();
// }
// function func2() {
//   func3();
// }
// function func3() {
//   console.log('func 3');
//   throw new Error('error on func3');
// }
// func1();

console.log('message 1');
setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve('promise').then(() => console.log('done'));
console.log('message 2');
