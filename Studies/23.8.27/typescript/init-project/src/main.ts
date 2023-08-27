//--Types--//

let firstNameImplicit = 'Edo'; // implicit
let firstName: string = 'Edo'; // explicit
let age: number = 25;
// age = 'abc'
let isStudent: boolean = true;
let temp: any = 'Kobi';
temp = 24;
temp = { a: 1, b: 'bb' };
temp = [1, 2, 3, 4];
temp = true;

//----------//
//--arrays--//

// const language = ['js', 'html', 'css'];
const languages: string[] = ['js', 'html', 'css']; //--> will *explicitly* define the array as an array of strings
// languages[0]=1 //--> is not possible since we've defined languages as an array of strings

const size = [1, 2, 3, 4]; //--> will *implicitly* define the array as an array of numbers

//-------------//
//--functions--//

function sum(a: number, b: number) {
  return a + b;
}
// sum(1,'2');
// sum(1,2);

const arr = [1, 2, 3, 4];
// arr.forEach((element) => console.log(element));

const strArr = ['a', 'b', 'c', 'd'];
// strArr.forEach((e) => console.log(e.length));

//-----------//
//--objects--//
const employee: {
  firstName: string;
  lastName: string;
  age: number;
  isManager?: boolean; // using the '?', the property will now be optional
} = {
  firstName: 'Edo',
  lastName: 'Mathias',
  age: 23,
  //   isManager: false,
};

const employee1 = {
  firstName: 'Shira',
  lastName: 'Mathias',
  age: 20,
  isManager: false,
};
// employee1.id = 28; //error

// class assignment:
// warite a function that recieves firstName, lastName and age
// and prints `first name: ${firstName}, last name: ${lastName}, age: ${age}`

function returnInfo(firstName: string, lastName: string, age: number): string {
  return `first name: ${firstName}, lastName: ${lastName}, age: ${age}`;
}

// console.log(returnInfo('Edo', 'Mathias', 23));

//--------------//
//--union type--//
let x: string | number; //--> can now be assigned as string or number
x = 'Arnon';
x = 22;

// const arr3: (string | number)[] = [1, 2, 3, '4'];
const arr2 = [1, 2, 3, '4', true]; //--> (string | number | boolean)[]

function func1(id: number | string) {
  if (typeof id === 'string') {
    return `id length is:${id.length}`;
  } else {
    return `your id is: ${id}`;
  }
}
// console.log(func1(5));
// console.log(func1('55'));

function printArrOrString(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(x.join(''));
  } else {
    console.log(x);
  }
}
// printArrOrString(['e', 'd', 'o']);
// printArrOrString('505');
