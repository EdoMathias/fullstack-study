"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    printColor() {
        console.log(this.color);
    }
}
// const shape1 = new Shape('red'); //--> cannot create an instance of abstract class
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const circle1 = new Circle(2, 'red');
// console.log(circle1.area());
