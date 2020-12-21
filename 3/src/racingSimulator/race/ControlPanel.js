import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Result from "../result/Result";

const ControlPanel = (props) => {
  const { members, race, HandlerStart, distance, show, HandleClose } = props;

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
      <Result
        members={members}
        show={show}
        HandleClose={HandleClose}
        HandlerStart={HandlerStart}
        value={value}
      />
    </Form>
  );
};

export default ControlPanel;
