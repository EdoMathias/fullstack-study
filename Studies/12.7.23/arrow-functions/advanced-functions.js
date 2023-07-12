// Creating a function that recieves a function as one of the parameters
function mainFunction(a, b, fn) {
  console.log(`${a}, ${b}`);
  const mainFunctionResult = fn(a, b);
  console.log(`mainFunctionResult = ${mainFunctionResult}`);
  return mainFunctionResult;
}
function btnHandler() {
  function add(a, b) {
    return a + b;
  }
  function divide(a, b) {
    return a / b;
  }

  const addResult = mainFunction(1, 2, add);
  console.log(`addResult = ${addResult}`);

  const divideResult = mainFunction(1, 2, divide);
  console.log(`divideResult = ${divideResult}`);
}
