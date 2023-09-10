abstract class Shape {
  constructor(public color: string) {}

  abstract area(): number;

  printColor() {
    console.log(this.color);
  }
}
// const shape1 = new Shape('red'); //--> cannot create an instance of abstract class

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle1 = new Circle(2, 'red');
// console.log(circle1.area());
