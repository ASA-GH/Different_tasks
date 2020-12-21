import React from "react";
import { Form } from "react-bootstrap";

const AdditionalParameter = (props) => {
  const { value } = props;
  switch (value) {
    case "Motorcycle":
      return (
        <Form.Check
          type="switch"
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
          type="number"
          name="peopleCount"
          placeholder="people"
        />
      );
    case "Truck":
      return (
        <Form.Control type="number" name="cargoWeight" placeholder="cargo" min={0} max={450000}/>
      );
    default:
      return "Error";
  }
};

export default AdditionalParameter;
