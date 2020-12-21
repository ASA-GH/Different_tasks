import React from "react";
import { Form } from "react-bootstrap";

const AdditionalParameter = (props) => {
  const { value, race } = props;
  switch (value) {
    case "Motorcycle":
      return (
        <Form.Check
          type="switch"
          disabled={race}
          id="custom-switch"
          label="Stroller"
          name="stroller"
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
          placeholder="people"
        />
      );
    case "Truck":
      return (
        <Form.Control
          type="number"
          name="cargoWeight"
          placeholder="cargo"
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
