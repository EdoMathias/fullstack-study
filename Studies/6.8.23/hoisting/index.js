'use strict';

sayHello();

function sayHello() {
  console.log('Hello');
}

// sayHello1(); // Error: Cannot access 'sayHello1' before initialization
let sayHello1 = function () {
  console.log('Hello1');
};

a = 5;
console.log(a);
var a;

console.log(b);
var b = 8;

c = 5;
console.log(c);
let c;
