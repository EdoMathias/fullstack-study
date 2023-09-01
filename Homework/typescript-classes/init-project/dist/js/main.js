"use strict";
class HardwareStore {
    constructor(category) {
        this.category = category;
    }
    printName() {
        return `Currently browsing: ${this.category}`;
    }
}
class PcParts extends HardwareStore {
    constructor(motherboard, graphicsCard, memory) {
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
    constructor(type) {
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
