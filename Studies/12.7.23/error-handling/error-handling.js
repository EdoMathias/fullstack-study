// Try-Catch
function btn1Handler() {
  try {
    const x = 5;
    x++;
    alert('hello');
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
  alert('end of function');
}

// function assignToConst() {
//   const x = 5;
//   x++;
// }

function assignToConst() {
  let y = 5;
  try {
    const x = y;
    x++;
    return x;
  } catch (err) {
    console.log(err);
  }
  return y;
}
function btn2Handler() {
  const result = assignToConst();
  console.log(`result = ${result}`);
  alert(`result = ${result}`);
}

// Try catch with throw new Error
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    // throw 'parameters must be nubers'; // -> bad practice
    throw new Error('parameters must be numbers');
  }
  const sum = a + b;
  return sum;
}
function btn3Handler() {
  let c = 0;
  try {
    c = add(1, '2');
  } catch (error) {
    console.log(error);
  }
  alert(c);
}

// try-catch-finally
function btn4Handler() {
  const b = Math.random();
  try {
    if (b > 0.5) {
      throw new Error('b is bigger than 0.5');
    }
    alert(b);
  } catch (error) {
    console.log(error);
  } finally {
    // ! do not return variables in the finally block !
    console.log('Finally block');
  }
}
