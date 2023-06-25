// Global scope - can be accessed in the whole file
const c = 128;

function sayHello() {
  const b = 'hello world';
  console.log(b);
}
// sayHello();

if (Math.random() > 0.5) {
  const external = 5;
  if (Math.random > 0.8) {
    // Will not throw an error since you can access
    // variables defined outside of inner scope
    const internal = 88;

    // ONLY inside this scope, external will equal 77.
    // When going back to the upper scope,
    // external will return to it's initial value
    const external = 77;

    console.log(internal);
    console.log(external);
  }
  // Will throw an error since internal can only
  // be accessed within the scope it is defined in
  // console.log(internal, external);
  console.log(external);
}

console.log(`--------`);
let name = 'Edo';
{
  // Transform the global variable `name` to have a new definition.
  let name = 'Mathias';
  //-----------------------
  // Will not transfrom the global variable `name` since
  // we've now definied a new variable named `name` for
  // this scope ONLY.
  // let name = 'Mathias';
  {
    name = 'Noa';
    // console.log(name);
  }
}
console.log(name);
