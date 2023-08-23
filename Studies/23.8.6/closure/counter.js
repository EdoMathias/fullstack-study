// let _counter = 0;

// function increment() {
//   counter++;
// }

// function decrement() {
//   counter--;
// }

// _counter = 120;

const counter = (function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();

counter.increment();
counter.decrement();
console.log(counter.value());
