import React, {useMemo, useState,} from 'react';
import './Node.css';
// import './../dropdown/Dropdown.css'
// import Node from './Node';
// import Tree from './../tree/Tree';
import Dropdown from './../dropdown/Dropdown';
import imgChevronDown from './../../img/chevronDown.svg'
import imgChevronRight from './../../img/chevronRight.svg'


export default function NodeView  (props) {

  const [expanded, setExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(undefined)
  const [nodeEdit, setNodeEdit] = useState("nodeEdit");
  const [updateNode, setUpdateNode] = useState(false);

  let updateByIds = [];

  const registration = (updateById) => {
    updateByIds.push(updateById);
  }

  const update = () => {
    setUpdateNode(!updateNode);
  }

  const updateById = (id) => {

    if (props.node.id == id) {
      setUpdateNode(!updateNode);
      return;
    }
    for (let i in updateByIds) {
      updateByIds[i](id);
    }
  }
  const add = (id) =>{
    props.addNode(id)

    if(!expanded)
      setExpanded(true);
    else
      update();
  };

  const remove = (id) => {
    if(props.deleteNode(id))
      props.parentUpdate();
  }

  const select = (e) =>{
    props.selectNode(props.node)
  }

  const handler = (id, action) => {
    if ("add" == action)
      add(id);
    else
      remove(id);
  }

  const prepare = () => {

    props.registration(updateById);

    let children = [];
    if (!expanded) 
      return children;
    
    props.node.children.map(node => {
      children.push( <NodeView id = {node.id} 
        size = {props.size} level = {props.level+1} 
        node ={node} addNode={props.addNode} deleteNode={props.deleteNode} parentUpdate={update} isRoot={props.isRoot}
        selectNode={props.selectNode} registration={registration}/>);
      })

    return children;
  }
 
  const renderNode = () => {
    const pointer = () =>{
      if(!props.node.children.length){}
      else
     {let chevron = !expanded ? <img src ={imgChevronRight} alt="a"/> : <img src ={imgChevronDown} alt="b"/>
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
      selectNode={select}
      id={props.node.id}
      handler={handler}
      isRoot={props.isRoot}
    />
    </div>
    { prepare() }
    </div>
    )
// {!dropdown?<Dropdown/>: null}
  }
const useMemoNode = useMemo(() => {

    return <div>{renderNode()}</div>;
  }, [expanded, props, updateNode]);

   return useMemoNode;
  }
