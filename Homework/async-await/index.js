//--Question 1--//
function getNumber(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.round(Math.random() * 100));
    }, seconds * 1000);
  });
}

async function callGetNumber() {
  const num = await getNumber(5);
  console.log(num);
}
// callGetNumber();

//--Question 2--//
function returnPromise() {
  let num = Math.round(Math.random());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 1) {
        resolve('resolve');
      } else {
        reject(new Error('reject'));
      }
    }, 1000);
  });
}

function callReturnPromise() {
  returnPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
// callReturnPromise();
// callReturnPromise();
// callReturnPromise();

//--Question 3--//
// Calculator app
function calc(num1, operator, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (operator) {
        case '+':
          resolve(num1 + num2);
        case '-':
          resolve(num1 - num2);
        case '*':
          resolve(num1 * num2);
        case '/':
          if (num2 !== 0) {
            resolve(num1 / num2);
          } else {
            reject(new Error('Cannot divide by 0!'));
          }
        default:
          reject(new Error('Invalid operator!'));
      }
    }, 3000);
  });
}
calc(5, '*', 5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// calling calc() using an async function
const callCalc = async () => {
  try {
    const result = await calc(5, '/', 5);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
callCalc();
