"use strict";
//--Types--//
let firstNameImplicit = 'Edo'; // implicit
let firstName = 'Edo'; // explicit
let age = 25;
// age = 'abc'
let isStudent = true;
let temp = 'Kobi';
temp = 24;
temp = { a: 1, b: 'bb' };
temp = [1, 2, 3, 4];
temp = true;
//----------//
//--arrays--//
// const language = ['js', 'html', 'css'];
const languages = ['js', 'html', 'css']; //--> will *explicitly* define the array as an array of strings
// languages[0]=1 //--> is not possible since we've defined languages as an array of strings
const size = [1, 2, 3, 4]; //--> will *implicitly* define the array as an array of numbers
//-------------//
//--functions--//
function sum(a, b) {
    return a + b;
}
// sum(1,'2');
// sum(1,2);
const arr = [1, 2, 3, 4];
// arr.forEach((element) => console.log(element));
const strArr = ['a', 'b', 'c', 'd'];
// strArr.forEach((e) => console.log(e.length));
//-----------//
//--objects--//
const employee = {
    firstName: 'Edo',
    lastName: 'Mathias',
    age: 23,
    //   isManager: false,
};
const employee1 = {
    firstName: 'Shira',
    lastName: 'Mathias',
    age: 20,
    isManager: false,
};
// employee1.id = 28; //error
// class assignment:
// warite a function that recieves firstName, lastName and age
// and prints `first name: ${firstName}, last name: ${lastName}, age: ${age}`
function returnInfo(firstName, lastName, age) {
    return `first name: ${firstName}, lastName: ${lastName}, age: ${age}`;
}
// console.log(returnInfo('Edo', 'Mathias', 23));
//--------------//
//--union type--//
let x; //--> can now be assigned as string or number
x = 'Arnon';
x = 22;
// const arr3: (string | number)[] = [1, 2, 3, '4'];
const arr2 = [1, 2, 3, '4', true]; //--> (string | number | boolean)[]
function func1(id) {
    if (typeof id === 'string') {
        return `id length is:${id.length}`;
    }
    else {
        return `your id is: ${id}`;
    }
}
// console.log(func1(5));
// console.log(func1('55'));
function printArrOrString(x) {
    if (Array.isArray(x)) {
        console.log(x.join(''));
    }
    else {
        console.log(x);
    }
}
// printArrOrString(['e', 'd', 'o']);
// printArrOrString('505');
