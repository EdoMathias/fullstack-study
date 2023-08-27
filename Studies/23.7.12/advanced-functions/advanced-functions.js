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

// Expression function
function btn2Handler() {
  const a = function add(a, b) {
    return a + b;
  };
  console.log(a(1, 2));
}

// Anonymous function
function btn3Handler() {
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(1, 2));
}

// Arrow function
const btn4Handler = () => {
  const add = (a, b) => {
    return a + b;
  };
  const add2 = (a, b) => a + b;

  const writeMessage = (msg) => console.log(msg);
  // no brackets means the function will return what is after the arrow
  console.log(add(1, 2));
  console.log(add2(1, 2));
  writeMessage('hello');
};

// setTimeout function
function btn5Handler() {
  const fn1 = (msg) => {
    setTimeout(() => {
      alert(msg);
    }, 5000);
  };
  fn1('hello after timeout');
}

// setInterval function
function btn6Handler() {
  const fn = () => {
    // setInterval(() => {
    //   document.getElementById('randomNumber').innerText = Math.floor(
    //     Math.random() * 10
    //   );
    // }, 2000);
    setInterval(() => {
      document.getElementById('randomNumber').innerText =
        new Date().toLocaleString();
    }, 1000);
  };
  fn();
}
