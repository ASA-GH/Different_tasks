import React, { useEffect, useState, useRef } from "react";
import "./Attribute.css"
import Close from "./../../img/close.svg"


const Attribute = (props) => {
const [close, setClose] = useState(false);
console.log(props)
  return (
    <div className="Attribute">
      <input placeholder ="-Name-" className = "inputName" defaultValue = "New attribute"/>
      <input placeholder ="-Value-" className = "inputValue"/>
      <button className = "Close" 
              // disabled = {!props.node.children.length} 
          onClick={() => setClose(!close)} >
          <img src ={Close} alt="x"/>
          </button>
    </div>
  );
};

export default Attribute;