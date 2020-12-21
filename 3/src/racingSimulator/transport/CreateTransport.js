import Truck from "./transportType/Truck";
import Car from "./transportType/Car";
import Bike from "./transportType/Bike";

const CreateTransport = (
  name = "New transport",
  type = "Bike",
  context = {}
) => {
  switch (type) {
    case "Bike":
      return new Bike(name, context);
    case "Car":
      return new Car(name, context);
    case "Truck":
      return new Truck(name, context);
    default:
      return new Bike(name, context);
  }
};
export default CreateTransport;
