import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AdditionalParameter from "./AdditionalParameter";
import Options from "./Options";

const Navigation = (props) => {
  const { members, race, AddMember } = props;
  const [value, setValue] = useState("Bike");
  let option = ["Bike", "Car", "Truck"];

  const GetValue = ({ target: { value } }) => {
    setValue(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target).entries());
    AddMember(members, data);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <br />
      <h1 className="md-center">Add member</h1>
      <br />
      <Form.Control
        type="text"
        name="name"
        placeholder="Name"
        disabled={race}
      />
      <br />
      <Form.Control as="select" name="type" onChange={GetValue} disabled={race} variant="primary">
        <Options option={option} />
      </Form.Control>
      <br />
      <AdditionalParameter value={value} race={race} />
      <br />
      <Button variant="success" type="submit" disabled={race}>
        Add member
      </Button>
    </Form>
  );
};

export default Navigation;
