"use strict";
//--Question 1--//
console.log('//--Question 1--//');
function returnSomething(something) {
    if (typeof something === 'string') {
        console.log(something);
    }
    else {
        console.log(something[0]);
    }
}
returnSomething('Edo');
returnSomething([1, 2, 3]);
//--Question 2--//
console.log('//--Question 2--//');
function returnTypeOf(item) {
    console.log(typeof item);
}
returnTypeOf(true);
returnTypeOf(2);
returnTypeOf('Edo');
returnTypeOf(undefined);
//--Question 3--//
console.log('//--Question 3--//');
function returnObject(array) {
    //   const numbers = array.filter((item) => typeof item === 'number');
    //   const strings = array.filter((item) => typeof item === 'string');
    //   const booleans = array.filter((item) => typeof item === 'boolean');
    return {
        string: array.filter((item) => typeof item === 'string'),
        number: array.filter((item) => typeof item === 'number'),
        boolean: array.filter((item) => typeof item === 'boolean'),
    };
}
console.log(returnObject([true, 1, 'edo', false, 2, 'shira']));
