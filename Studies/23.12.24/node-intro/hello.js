const { add, subtract } = require('./calculator');

console.log('Hello from node');

const addResult = add(1, 2);
const subtractResult = subtract(2, 1);
console.log(`addResult: ${addResult} || subtractResult: ${subtractResult}`);
