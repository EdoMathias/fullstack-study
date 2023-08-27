// function init() {
//   let name = 'Edo';
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(2));

const makeAdderArrow = (x) => (y) => x + y;
const add7 = makeAdderArrow(7);
console.log(add7(3));
