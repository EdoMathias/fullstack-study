"use strict";
class Animal {
    constructor(numOfLegs) {
        this.numOfLegs = numOfLegs;
    }
    printNumofLegs() {
        return 0;
    }
}
class Bear extends Animal {
    constructor(numOfLegs, type) {
        super(numOfLegs);
        this.type = type;
    }
    printType() {
        console.log(this.type);
    }
    printNumofLegs() {
        return 4;
    }
}
class Fish extends Animal {
    constructor(numOfLegs, kind) {
        super(numOfLegs);
        this.kind = kind;
    }
    printKind() {
        console.log(this.kind);
    }
    printNumofLegs() {
        return 0;
    }
}
let a1 = new Fish(0, 'Clown Fish');
console.log(a1.numOfLegs);
