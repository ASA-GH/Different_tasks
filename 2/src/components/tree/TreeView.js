import React from 'react';
import './Tree.css';
import  Tree from'./Tree';
import NodeView from "./../node/NodeView"

const TreeView = (props) =>{
  let size = 4
  let level = 0 

  const isRoot = (id) =>{
    return props.tree.root.id == id;
  }

  return ( 
     <div className="treeView">
    <NodeView id = {props.tree.root.id} size = {size} 
    level = {level} node ={props.tree.root} 
    addNode={props.addNode} deleteNode={props.deleteNode} isRoot={isRoot} selectNode={props.selectNode}/>
    </div>
  )}

export default TreeView;