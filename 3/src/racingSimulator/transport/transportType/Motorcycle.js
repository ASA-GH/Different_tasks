import Transport from "../Transport";
export default class Motorcycle extends Transport {
  stroller = false;
  constructor(name, context) {
    super(name);
    this.name = name;
    this.stroller = context["stroller"];
    this.repairTime = 3;
    this.speed = 90;
    this.probability = 0.05;
    this.type = "Motorcycle";
    this.wheelsCount = this.stroller === false ? 2 : 3;
  }
}
