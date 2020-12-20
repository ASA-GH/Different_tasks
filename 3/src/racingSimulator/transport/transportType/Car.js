import Transport from "../Transport";

export default class Car extends Transport {
  peopleCount = 0;
  constructor(name, context) {
    super(name);
    this.peopleCount = context.peopleCount;
    this.repairTime = 4;
    this.speed = 100;
    this.probability = 0.05;
    this.type = "Car";
    this.wheelsCount = 4;
  }
}
