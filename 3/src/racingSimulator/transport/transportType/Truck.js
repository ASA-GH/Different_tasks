import Transport from "../Transport";
export default class Truck extends Transport {
  cargoWeight = 0;
  constructor(name, context) {
    super(name);
    this.name = name;
    this.cargoWeight = context.cargoWeight;
    this.repairTime = 6;
    this.speed = 75;
    this.probability = 0.06;
    this.type = "Truck";
    this.wheelsCount = 6;
  }
}
