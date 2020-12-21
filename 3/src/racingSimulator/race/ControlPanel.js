import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ControlPanel = (props) => {
  const { race, HandlerStart, distance } = props;

  const [value, setValue] = useState(distance);
  const onInput = ({ target: { value } }) => setValue(value);
  const onFormSubmit = (e) => {
    e.preventDefault();
    HandlerStart(value);
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <br />
      <h1 className="md-center">Race control</h1>
      <br />
      <Form.Control
        onChange={onInput}
        value={value}
        disabled={race}
        min={1}
        max={100000}
        type="number"
        name="distance"
        placeholder="Distance"
      />
      <br />
      <Button variant="success" disabled={race} type="submit">
        Start
      </Button>
    </Form>
  );
};

export default ControlPanel;
