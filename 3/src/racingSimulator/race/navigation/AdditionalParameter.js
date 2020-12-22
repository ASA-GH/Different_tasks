import React from "react";
import { Form } from "react-bootstrap";

const AdditionalParameter = (props) => {
  const { value, race } = props;
  switch (value) {
    case "Bike":
      return (
        <Form.Check
          type="switch"
          disabled={race}
          id="custom-switch"
          label="Stroller"
          name="Stroller"
        />
      );
    case "Car":
      return (
        <Form.Control
          min={1}
          max={10}
          disabled={race}
          type="number"
          name="peopleCount"
          placeholder="People"
        />
      );
    case "Truck":
      return (
        <Form.Control
          type="number"
          name="cargoWeight"
          placeholder="Cargo"
          min={0}
          max={450000}
          disabled={race}
        />
      );
    default:
      return "Error";
  }
};

export default AdditionalParameter;
