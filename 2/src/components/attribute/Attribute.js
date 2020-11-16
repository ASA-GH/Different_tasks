import React, { useEffect, useState, useRef } from "react";
import "./Attribute.css"
import Close from "./../../img/close.svg"


const Attribute = (props) => {
const [close, setClose] = useState(false);
const [inputName, setInputName] = useState(props.name);
const [inputValue, setInputValue] = useState(props.value);

const handler = (nodeId, attributeKey) =>{
  props.deleteAttribute(nodeId, attributeKey)
}
const syntheticFunctionName = e => {
  props.changeAttributeKey(props.node.id, inputName, e.target.value)
  setInputName(e.target.value)
};

const syntheticFunctionValue = e => {
  props.changeAttributeValue(props.node.id, inputName, inputValue)
  setInputValue(e.target.value)
};

  return (
    <div className="Attribute">
      <input placeholder ="-Name-" value={inputName} onInput={e => syntheticFunctionName(e)} className = "inputName" />
      <input placeholder ="-Value-" value={inputValue} onInput={e => syntheticFunctionValue(e)} className = "inputValue"/>
      <button className = "Close" 
          // onClick={() => setClose(!close)} >
          onClick={e=>handler(props.node.id, props.name, "delete")} >
          <img src ={Close} alt="x"/>
          </button>
    </div>
  );
};

export default Attribute;