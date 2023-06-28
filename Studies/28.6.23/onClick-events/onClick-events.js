let isPrinted = false;

function logToConsole() {
  //   let str = '';
  let str = prompt('enter you name');
  console.log(str);
}

function clickHandler(p) {
  for (let i = 0; i < 3; i++) {
    if (isPrinted === false) {
      console.log(p);
      isPrinted = true;
    }
  }
}
