class Animal {
  numOfLegs: number;

  constructor(numOfLegs: number) {
    this.numOfLegs = numOfLegs;
  }

  printNumofLegs() {
    return 0;
  }
}

class Bear extends Animal {
  type: string;

  constructor(numOfLegs: number, type: string) {
    super(numOfLegs);
    this.type = type;
  }

  printType() {
    console.log(this.type);
  }

  printNumofLegs(): number {
    return 4;
  }
}

class Fish extends Animal {
  kind: string;

  constructor(numOfLegs: number, kind: string) {
    super(numOfLegs);
    this.kind = kind;
  }

  printKind() {
    console.log(this.kind);
  }

  printNumofLegs(): number {
    return 0;
  }
}

let a1: Animal = new Fish(0, 'Clown Fish');
console.log(a1.numOfLegs);
