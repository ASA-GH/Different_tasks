import React from "react";
import { Button, Form } from "react-bootstrap";

const Options = (props) => {
  const { option } = props;

    let arr = [];
    option.map((option) => {
      arr.push(<option>{option}</option>);
    });
    return arr
  };
export default Options;
