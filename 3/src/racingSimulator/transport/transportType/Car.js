import Transport from "../Transport";

export default class Car extends Transport {
  peopleCount = 0;

  constructor(name, context) {
    super(name);
    this.name = name === "" ? "Car" : name;
    this.peopleCount = this.GetPeopleCount(context)
    this.repairTime = 4;
    this.speed = 100;
    this.probability = 0.05;
    this.type = "Car";
    this.wheelsCount = 4;
  }
  GetPeopleCount(context){
    if (context.peopleCount && context.peopleCount > 0)
     return context.peopleCount > 10 ? 10 : context.peopleCount;
    return 1
  }
}
