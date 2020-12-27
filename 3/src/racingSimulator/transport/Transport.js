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
    this.isStop = true;
    this.time = 0;
  }
  GetVariant() {
    if (this.isStop) return "success";

    if (this.IsCrash()) return "danger";

    return "primary";
  }

  GetFace() {
    if (this.isStop) return "face12";

    if (this.IsCrash()) return "face11";

    return "face10";
  }

  GetColor() {
    if (this.isStop) return "bg-success text-white";

    if (this.IsCrash()) return "bg-danger text-white";

    return "bg-primary text-dark";
  }
  Prepare() {
    this.time = 0;
    this.isStop = false;
    this.distance = 0;
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

  Run(time) {
    if (this.isStop) return;
    this.time = time;
    if (!this.CheckCrash()) {
      this.distance = this.distance + this.speed;
    }
  }

  Stop() {
    this.isStop = true;
  }
}
