import React, {useState} from 'react';
import './Node.css';
import imgPlusGreen from "./../../img/plusGreen.svg"
import imgPlusBlue from "./../../img/plusBlue.svg"
import Attribute from "./../attribute/Attribute"

const NodeEdit = (props) =>{
 
const [plus, setPlus] = useState(false);
let  stringName ="Node name"
let stringAttribute = "Attributes"

const onChange = (e) =>{
  if (props.selectedNode.name) 
    props.renameNode(props.selectedNode.id, e.target.value)
}

const getValue = (value) =>{

  if (this.value != undefined)
    return value;

  return props.selectedNode.name ? props.selectedNode.name : '';
}
const pointerPlus = () =>{
 let chevron = !plus ? <img src ={imgPlusBlue} alt="+"/> : <img src ={imgPlusGreen} alt="-"/>
  return chevron
}

return <div className="nodeEdit">
  <div className= "nodeEditName">
<span>{stringName}</span>
<input  className = "inputName" onChange={onChange}  placeholder = {props.selectedNode ? props.selectedNode.name : "-Name-"} />

</div>
<div className= "nodeEditAttribute">
  <h4>{stringAttribute}</h4>
  </div>
<div className = "nodeEditContent">
  <div className = "attributesLabel">
    {/* <div className = "labelN">№</div> */}
    <div className = "label">Name</div>
    <div className = "label">Value</div>
    {/* <div className = "label">Attribute  name</div>
    <div className = "label">Attribute  value</div> */}

    <div></div>
  </div>
  <div className = "attributesContent" >
  {/* <div className = "attributes"></div> */}
  <Attribute/>
  <Attribute/>
  <Attribute/>
  {/* <div className = "attributes"></div> */}
  <button className = "Plus" 
              // disabled = {!props.node.children.length} 
          onClick={() => setPlus(!plus)} >
          {pointerPlus()}
          </button>
  </div>
</div>
</div>
}
export default NodeEdit;