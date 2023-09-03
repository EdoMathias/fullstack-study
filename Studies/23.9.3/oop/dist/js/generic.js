"use strict";
function numIdentity(arg) {
    return arg;
}
function strIdentity(arg) {
    return arg;
}
function anyIdentity(arg) {
    return arg;
}
// console.log(numIdentity(21));
// console.log(strIdentity('21'));
const result = anyIdentity('22');
const strResult = strIdentity('22');
function identity(arg) {
    return arg;
}
const id = identity(222);
const id1 = identity(33);
const strId = identity('222');
// console.log(id);
function printLength(arg) {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        console.log(arg.length);
    }
    return arg;
}
const person = { id: 123, getId: () => 123 };
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getUserId() {
        return this.id;
    }
}
const employee = new Employee(321, 'Edo Mathias');
const employee2 = new Employee('stringId', 'Edo Mathias');
// console.log(employee);
// console.log(employee2);
const a = new Array();
function getLength(arg) {
    return arg.length;
}
console.log(getLength('abc'));
console.log(getLength([1, 2, 3, 4, 5]));
