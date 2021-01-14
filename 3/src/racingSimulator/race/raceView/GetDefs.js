import React from "react";
import SymbolPlanet from "./SymbolPlanet";
import SymbolBike from "../../transport/transportView/SymbolBike";
import SymbolCar from "../../transport/transportView/SymbolCar";
import SymbolTruck from "../../transport/transportView/SymbolTruck";

const GetDefs = () => {
  return (
    <defs>
      <SymbolBike />
      <SymbolCar />
      <SymbolTruck />
      <SymbolPlanet />
    </defs>
  );

};
export default GetDefs;
