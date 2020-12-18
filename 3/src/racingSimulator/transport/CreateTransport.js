import Truck from "./transportType/Truck";
import Car from "./transportType/Car";
import Motorcycle from "./transportType/Motorcycle";

const CreateTransport = (
  name = "New transport",
  type = "Motorcycle",
  context = {}
) => {
  switch (type) {
    case "Motorcycle":
      return new Motorcycle(name, context);
    case "Car":
      return new Car(name, context);
    case "Truck":
      return new Truck(name, context);
    default:
      return new Motorcycle(name, context);
  }
};
export default CreateTransport;
