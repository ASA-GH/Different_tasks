import React, {useState, useRef} from 'react';
import './Node.css';
import imgPlusGreen from "./../../img/plusGreen.svg"
import imgPlusBlue from "./../../img/plusBlue.svg"
import Attribute from "./../attribute/Attribute"

const NodeEdit = (props) =>{
 
const [plus, setPlus] = useState(false);
const [current, setCurrent] = useState(props.selectedNode);
const [input, setInput] = useState(current.name);

let  stringName ="Node name"
let stringAttribute = "Attributes"
let value = "";
const inputEl = useRef(null);

 
const select = (node) =>{
  setCurrent(node);
  setInput(node.name)
}

const onChange = (e) =>{
  if (current && current.name != e.target.value) {
    props.renameNode(current.id, e.target.value)
    // inputEl.current.value = props.selectedNode.name;
  }
}


const pointerPlus = () =>{
 let chevron = !plus ? <img src ={imgPlusBlue} alt="+"/> : <img src ={imgPlusGreen} alt="-"/>
  return chevron
  
}

const prepareAttributes = () => {
  // props.registration(updateById);

  let attributes = [];
  if (!current.attributes)
    return attributes;

  let keys = Object.keys(current.attributes)
  
  for (let i in keys){
    let name = keys[i]
    attributes.push(<Attribute name={name} value={current.attributes[name]}/>)
  }

  return attributes;
}

props.registration("onSelect", select);

return (
<div className="nodeEditView">
<div className = "horizontalLine1"/>
<div className="nodeEdit">
<div className= "nodeEditName">
<span>{stringName}</span>
{/* <input className = "inputName" onChange={onChange} id = "inputName" ref={inputEl} value={value}/> */}
<input className = "inputName" value={input} onInput={e => setInput(e.target.value)} onChange={onChange}/>
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
  <button className = "Plus" 
              // disabled = {!props.node.children.length} 
          onClick={() => setPlus(!plus)} >
          {pointerPlus()}
          </button>
  </div>
</div>
</div>
<div className = "horizontalLine2"/>
  </div>
)

}
export default NodeEdit;