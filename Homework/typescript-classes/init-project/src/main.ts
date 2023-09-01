class HardwareStore {
  category: string;

  constructor(category: string) {
    this.category = category;
  }

  printName() {
    return `Currently browsing: ${this.category}`;
  }
}

class PcParts extends HardwareStore {
  motherboard: string;
  graphicsCard: string;
  memory: string;

  constructor(motherboard: string, graphicsCard: string, memory: string) {
    super("Pc Parts");
    this.motherboard = motherboard;
    this.graphicsCard = graphicsCard;
    this.memory = memory;
  }

  printSpecs() {
    return `Current Specs are: ${this.motherboard}, ${this.graphicsCard}, ${this.memory}`;
  }
}

class Cable extends HardwareStore {
  type: string;

  constructor(type: string) {
    super("Cables");
    this.type = type;
  }

  printCable() {
    return `Current cable selected: ${this.type}`;
  }
}

const pc1 = new PcParts("z390", "RTX 3080", "32gb corsair DDR4");
console.log(pc1.printName());
console.log(pc1.printSpecs());

const cable = new Cable("CPU cable");
console.log(cable.printName());
console.log(cable.printCable());
