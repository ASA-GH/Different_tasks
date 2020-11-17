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
let value = "";
  const inputEl = useRef(null);
let updateByIds = [];

const registration = (updateById) => {
    updateByIds.push(updateById);
  }
 
  const update = () => {
    setUpdateAttribute(!updateAttribute);
  }

  const updateById = (id) => {

    if (props.node.id == id) {
      setUpdateAttribute(!updateAttribute);
      return;
    }
    for (let i in updateByIds) {
      updateByIds[i](id);
    }
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
    update();
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

const pointerPlus = () =>{
 let chevron = !plus ? <img src ={imgPlusBlue} alt="+"/> : <img src ={imgPlusGreen} alt="-"/>
  return chevron
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
  registration(updateById);
  let attributes = [];
  if (!current.attributes)
    return attributes;

  let keys = Object.keys(current.attributes)
  
  for (let i in keys){
    let name = keys[i]
    attributes.push(<Attribute node={current} name={name} value={current.attributes[name]}  
                               deleteAttribute={deleteAttribute} 
                               changeAttributeKey={props.changeAttributeKey} 
                               changeAttributeValue={props.changeAttributeValue}/>)
  }

  return attributes;
}
props.registration("onSelect", select);
registration("add", addAttributes);

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