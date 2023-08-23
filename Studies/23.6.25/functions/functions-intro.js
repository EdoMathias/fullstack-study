function printHello() {
  console.log(`hello world`);
}
// printHello();

function printHelloPerson(person) {
  console.log(`Hello ${person}`);
}
// printHelloPerson(`Edo`);

function printHelloPersonTimes(person, times) {
  for (let i = 0; i < times; i++) {
    console.log(`Hello ${person}`);
  }
}
// printHelloPersonTimes('Edo', 3);

const arr = [1, 2, 3, 4];
function printArrItems(arr) {
  for (item of arr) {
    console.log(item);
  }
}
// printArrItems(arr);

function firstNameLastName(firstName, lastName) {
  const str = `${firstName} ${lastName}`;
  return str;
}
// console.log(firstNameLastName('Edo', 'Mathias'));

function getSumAndMultiply(num1, num2) {
  const arr = [];
  arr.push(num1 + num2);
  arr.push(num1 * num2);
  return arr;
}
// console.log(getSumAndMultiply(5, 5));

function factorial(number) {
  let multiply = 1;
  for (let i = 1; i <= number; i++) {
    multiply *= i;
  }
  return multiply;
}
// console.log(factorial(5));

function randomColor() {
  const colors = ['red', 'green', 'blue', 'white', 'black', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}
// console.log(randomColor());
