import { v4 as uuid } from "uuid";

export default class Transport {
  id = "";
  name = "";
  constructor(name) {
    this.name = name;
    this.id = uuid();
    this.speed = 0;
    this.repairTime = 3;
    this.passedTime = 0;
    this.distance = 0;
    this.wheelsCount = 0;
    this.probability = 0;
    this.type = "";
    this.isStop = false;
  }

  IsCrash() {
    return this.passedTime > 0;
  }

  CheckCrash() {
    let random = Math.random();
    if (this.passedTime) {
      this.passedTime = this.passedTime - 1;
      return true;
    }

    if (random >= this.probability) return false;

    this.passedTime = this.repairTime;
    return true;
  }

  Run() {
    if (!this.isStop && !this.CheckCrash())
      this.distance = this.distance + this.speed;
  }

  Stop(time, distance) {
    this.isStop = true;
  }
}