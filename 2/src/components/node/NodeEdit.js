import React, {useState, useRef} from 'react';
import './Node.css';
import imgPlusGreen from "./../../img/plusGreen.svg"
import imgPlusBlue from "./../../img/plusBlue.svg"
import Attribute from "./../attribute/Attribute"

const NodeEdit = (props) =>{
 
const [plus, setPlus] = useState(false);
const [current, setCurrent] = useState(props.selectedNode);
const [input, setInput] = useState(current.name);
const [updateAttribute, setUpdateAttribute] = useState(false);
const [disabled, setDisabled] = useState(true);


let stringName ="Node name"
let stringAttribute = "- Attributes -"
 
  const update = () => {
    setUpdateAttribute(!updateAttribute);
  }

  const createNameAttribute = (node)=>{
    let i = 1;
    while (true) {
      let name = "new attribute " + i;
      if (!Object.keys(node.attributes).includes(name))
        return name;
      i++;
    }
  }

  const deleteAttribute = (nodeId, attributeKey) =>{
    props.deleteAttribute(nodeId, attributeKey)
  };

  const addAttributes = (node) =>{
    props.addAttribute(node.id, createNameAttribute(node))
    if(!plus)
    setPlus(true);
    else
      update();
  };

const select = (node) =>{
  setCurrent(node);
  setInput(node.name);
  setDisabled(false)
}

const handler = (node, action) => {
  if ("add" == action){
    addAttributes(node);
  }
}
const syntheticFunction = e => {
  props.renameNode(current.id, e.target.value)
  setInput(e.target.value)
};


const prepareAttributes = () => {
  let a = [];
  if (!current.attributes)
    return a;

  let keys = Object.keys(current.attributes)
  
  for (let i in keys){
    let n = keys[i]

// console.log(name)

    a.push(<Attribute key={i} node={current} n={n} value={current.attributes[n]}  
                               deleteAttribute={deleteAttribute} 
                               changeAttributeKey={props.changeAttributeKey} 
                               changeAttributeValue={props.changeAttributeValue} 
                               parentUpdate={update}/>)
  }
  return a;
}
props.registration("onSelect", select);
props.registration("add", addAttributes);

return (
<div className="nodeEditView">
<div className = "horizontalLine1"/>
<div className="nodeEdit">
<div className= "nodeEditName">
<span>{stringName}</span>
<input className = "inputName" value={input} onInput={e => syntheticFunction(e)} disabled={disabled}/>
</div>
<div className= "nodeEditAttribute">
  <h4>{stringAttribute}</h4>
  </div>
<div className = "nodeEditContent">
  <div className = "attributesLabel">
    <div className = "label">Name</div>
    <div className = "label">Value</div>
    <div></div>
  </div>
  <div className = "attributesContent" >
   { prepareAttributes() } 
  <button className = "Plus" disabled = {disabled}
          onClick={e=>handler(current, "add")}>Add</button>
  </div>
</div>
</div>
<div className = "horizontalLine2"/>
  </div>
)
}
export default NodeEdit;