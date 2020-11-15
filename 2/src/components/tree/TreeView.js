import React from 'react';
import './Tree.css';
import  Tree from'./Tree';
import NodeView from "./../node/NodeView"

const TreeView = (props) =>{
  let size = 4
  let level = 0 
  let updater = () =>{};

  const isRoot = (id) =>{
    return props.tree.root.id == id;
  }

  const updateById = (id) => {
    updater(id);
  }

  const registration = (updateById) => {
    updater = updateById;
  }
  
  props.registration ("updateById", updateById);
  return ( 
    <div className="treeView">
      <NodeView id={props.tree.root.id} size={size}
      level={level} node={props.tree.root} addNode={props.addNode}
      deleteNode={props.deleteNode} isRoot={isRoot}
      registration={registration} selectNode={props.selectNode}/>
    </div>
  )}

export default TreeView;