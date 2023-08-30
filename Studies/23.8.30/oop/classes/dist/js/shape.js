"use strict";
class Shape {
    constructor(colorData) {
        this.color = colorData;
    }
    area() {
        return 0;
    }
}
// Inheritance
// console.log(`//--Inheritance--//`);
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Square extends Shape {
    constructor(color, length) {
        super(color);
        this.length = length;
    }
    area() {
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
let c2 = new Circle('Blue', 2);
// console.log(c2.area());
c2 = new Square('green', 3);
// console.log(c2.area());
// function printCircleAre(obj: Circle) {
//   console.log(obj.area());
// }
// function printSquareAre(obj: Square) {
//   console.log(obj.area());
// }
function printShapeArea(obj) {
    console.log(obj.area());
}
// printShapeArea(c1);
// printShapeArea(sq1);
