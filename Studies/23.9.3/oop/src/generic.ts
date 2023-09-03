function numIdentity(arg: number) {
  return arg;
}
function strIdentity(arg: string) {
  return arg;
}

function anyIdentity(arg: any) {
  return arg;
}

// console.log(numIdentity(21));
// console.log(strIdentity('21'));

const result = anyIdentity('22');
const strResult = strIdentity('22');

function identity<Type>(arg: Type): Type {
  return arg;
}
const id = identity<number>(222);
const id1 = identity(33);
const strId = identity<string>('222');
// console.log(id);

function printLength<Type>(arg: Type): Type {
  if (typeof arg === 'string' || Array.isArray(arg)) {
    console.log(arg.length);
  }
  return arg;
}
// printLength<string[]>(['edo', 'mathias']);
// printLength<string>('edo mathias');

interface Person<Type> {
  id: Type;
  getId: () => Type;
}

const person: Person<number> = { id: 123, getId: () => 123 };

class Employee<Type> {
  constructor(private id: Type, public name: string) {}
  getUserId() {
    return this.id;
  }
}

const employee = new Employee<number>(321, 'Edo Mathias');
const employee2 = new Employee<string>('stringId', 'Edo Mathias');
// console.log(employee);
// console.log(employee2);

const a = new Array<string>();

function getLength<Type extends { length: number }>(arg: Type): number {
  return arg.length;
}

console.log(getLength<string>('abc'));
console.log(getLength<number[]>([1, 2, 3, 4, 5]));
