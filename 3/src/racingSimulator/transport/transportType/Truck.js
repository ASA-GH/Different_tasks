import Transport from "../Transport";
export default class Truck extends Transport {
  cargoWeight = 0;
  constructor(name, context) {
    super(name);
    this.name = name === "" ? "Truck" : name;
    this.cargoWeight = this.GetCargoWeight(context);
    this.repairTime = 6;
    this.speed = 75;
    this.probability = 0.06;
    this.type = "Truck";
    this.wheelsCount = 6;
  }
  GetCargoWeight(context) {
    if (context.cargoWeight && context.cargoWeight > 0)
      return context.cargoWeight > 450000 ? 450000 : context.cargoWeight;
    return 0;
  }
}
