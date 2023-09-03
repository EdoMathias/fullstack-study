class Phone {
  readonly company: string;
  model: string;
  color: string;
  _memorySize: number;
  constructor(
    companyName: string,
    modelName: string,
    color: string,
    memorySize: number
  ) {
    this.company = companyName;
    this.model = modelName;
    this.color = color;
    this._memorySize = memorySize;
  }

  // Method inside a class
  printPhoneData() {
    console.log(
      `company: ${this.company}, model: ${this.model}, color: ${this.color}, memorySize: ${this._memorySize}gb`
    );
  }

  get memory() {
    return this._memorySize;
  }

  set memory(value) {
    if (value > 0) {
      this._memorySize = value;
    }
  }
}

const phone1 = new Phone('Apple', 'iPhone 13', 'Jet Black', 256);
phone1.memory = -512;
console.log(phone1.memory);

phone1.printPhoneData();
