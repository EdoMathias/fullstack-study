// in the below example,
// var is considered a global variable, which
// will cause the loop to not function properly
// for (var index = 1; index <= 3; index++) {
//   setTimeout(() => {
//     console.log('after ' + index + ' second(s) ' + index);
//   }, index * 1000);
// }

// to mitigate this,
// we can wrap the var inside a function
// which will cause the var to behave inside
// the function scope, and make the loop run properly
// for (var index = 1; index <= 3; index++) {
//   (function (index) {
//     setTimeout(() => {
//       console.log('after ' + index + ' second(s) ' + index);
//     }, index * 1000);
//   })(index);
// }

// another way to mitigate this,
// is to use let, which is defined in the block scope
// of the loop
for (let index = 1; index <= 3; index++) {
  setTimeout(() => {
    console.log('after ' + index + ' second(s) ' + index);
  }, index * 1000);
}
