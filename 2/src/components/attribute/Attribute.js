import React, { useEffect, useState, useRef } from "react";
import "./Attribute.css"
import Close from "./../../img/close.svg"


const Attribute = (props) => {
const [close, setClose] = useState(false);
console.log(props)
  return (
    <div className="Attribute">
      <input placeholder ="-Name-" value={props.name} className = "inputName" />
      <input placeholder ="-Value-" value={props.value}  className = "inputValue"/>
      <button className = "Close" 
              // disabled = {!props.node.children.length} 
          onClick={() => setClose(!close)} >
          <img src ={Close} alt="x"/>
          </button>
    </div>
  );
};

export default Attribute;