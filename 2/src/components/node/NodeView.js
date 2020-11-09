import React, {useMemo, useState,} from 'react';
import './Node.css';
import './../dropdown/Dropdown.css'
import Node from './Node';
import Tree from './../tree/Tree';
import Dropdown from './../dropdown/Dropdown';
import chevronDown from './../../img/chevronDown.svg'
import chevronRight from './../../img/chevronRight.svg'


export default function NodeView  (props) {

  const [expanded, setExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(undefined)
  const [nodeEdit, setNodeEdit] = useState("nodeEdit");

  const prepare = () => {
    let children = [];
    if (!expanded) 
      return children;
    
    props.node.children.map(node => {
      children.push( <NodeView key = {node.id} 
        size = {props.size} level = {props.level+1} 
        node ={node} addNode={props.addNode}/>);
      })
    return children;
  }
  // console.log(dropdown)

   const open = (e)=>{ 
     e.preventDefault();
     setDropdown(!dropdown)
    }

  const renderNode = () => {
   
   
    const pointer = () =>{
      if(!props.node.children.length){}
      else
     {let chevron = !expanded ? <img src ={chevronRight} alt="a"/> : <img src ={chevronDown} alt="b"/>
      return chevron
    }}
    
    return (
      <div className = "wrapNode">
      <div className = "nodeView">
      <div className = "nodeViewPoint">{'.'.repeat(props.size*props.level)}</div>
      <button className = "expand" 
              disabled = {!props.node.children.length} 
              onClick={() => setExpanded(!expanded)} 
               >{pointer()}</button>
      {/* <button className = "nodeName" onContextMenu = {onContextMenu}>{props.node.name}</button>
     */}
    <Dropdown
      placeholder={props.node.name}
      value={dropdown}
      onContextMenu={v => setDropdown(v)}
      onClick={() => setNodeEdit(!nodeEdit)}
      id={props.node.id}
      addNode={props.addNode}
    />
    </div>
    { prepare() }
    </div>
    )
// {!dropdown?<Dropdown/>: null}
  }
const useMemoNode = useMemo(() => {

    return <div>{renderNode()}</div>;
  }, [expanded, props]);

   return useMemoNode;
  }
