import React from 'react';
import './Tree.css';
import  Tree from'./Tree';
import NodeView from "./../node/NodeView"

const TreeView = (props) =>{
  let size = 4
  let level = 0
  return ( 
     <div className="treeView">
    <NodeView key = {props.tree.root.id} size = {size} level = {level} node ={props.tree.root} addNode={props.addNode}/>
    </div>
  )}

export default TreeView;