import Transport from "../Transport";
export default class Bike extends Transport {
  stroller = false;
  constructor(name, context) {
    super(name);
    this.name = name === "" ? "Bike" : name;
    this.stroller = !!context.stroller;
    this.repairTime = 3;
    this.speed = 90;
    this.probability = 0.05;
    this.type = "Bike";
    this.wheelsCount = !this.stroller ? 2 : 3;
  }
}
