import React, { useEffect, useState } from "react";
import "./Attribute.css";
import Close from "./../../img/close.svg";

const Attribute = (props) => {
  const [inputName, setInputName] = useState(props.n);
  const [inputValue, setInputValue] = useState(props.value);

  useEffect(() => {
    setInputName(props.n);
    setInputValue(props.value);
  }, [props.n, props.value]);

  const handler = (nodeId, attributeKey) => {
    props.deleteAttribute(nodeId, attributeKey);
    props.parentUpdate();
  };
  const syntheticFunctionName = (e) => {
    props.changeAttributeKey(props.node.id, inputName, e.target.value);
    setInputName(e.target.value);
  };

  const syntheticFunctionValue = (e) => {
    props.changeAttributeValue(props.node.id, inputName, inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div className="Attribute">
      <input
        placeholder="-Name-"
        value={inputName}
        onInput={(e) => syntheticFunctionName(e)}
        className="inputName"
      />
      <input
        placeholder="-Value-"
        value={inputValue}
        onInput={(e) => syntheticFunctionValue(e)}
        className="inputValue"
      />
      <button
        className="Close"
        onClick={(e) => handler(props.node.id, props.n, "delete")}
      >
        <img src={Close} alt="x" />
      </button>
    </div>
  );
};

export default Attribute;
