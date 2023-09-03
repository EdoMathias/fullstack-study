class Shape {
  color: string;

  constructor(colorData: string) {
    this.color = colorData;
  }

  area() {
    return 0;
  }
}

// Inheritance
// console.log(`//--Inheritance--//`);
class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  length: number;

  constructor(color: string, length: number) {
    super(color);
    this.length = length;
  }
  area(): number {
    return Math.pow(this.length, 2);
  }
}

const s1 = new Shape('blue');
const c1 = new Circle('black', 2);
const sq1 = new Square('red', 5);
// console.log(c1.color);
// console.log(c1.area());
// console.log(sq1.area());

//--Polymorphism--//
// console.log(`//--Polymorphism--//`);

let c2: Shape = new Circle('Blue', 2);
// console.log(c2.area());
c2 = new Square('green', 3);
// console.log(c2.area());

// function printCircleAre(obj: Circle) {
//   console.log(obj.area());
// }
// function printSquareAre(obj: Square) {
//   console.log(obj.area());
// }

function printShapeArea(obj: Shape) {
  console.log(obj.area());
}
// printShapeArea(c1);
// printShapeArea(sq1);
