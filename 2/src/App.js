import React, {useState, useMemo}from 'react';
import TreeView from "./components/tree/TreeView"
import Tree from "./components/tree/Tree.js"
import NodeEditView from "./components/node/NodeEditView"

import './App.css';

const App = () => {
const [tree, setTree] = useState(new Tree());
const [selectedNode, setSelectedNode] = useState({});

  const addNode = (id) =>{
    tree.createNode(id)
    setTree(tree)
  }
  const deleteNode = (id) =>{
    if (!tree.deleteNode(id))
      return false;

    setTree(tree)
    return true;
  }

  const selectNode = (node) => {
    setSelectedNode(node)


  }

  const renameNode = (id, name) =>{
    let node = tree.renameNode(id, name)
    console.log(node);
    if (!node)
      return false;
      console.log("2");
    // setSelectedNode(node)
    setTree(tree)
/*
    let element = document.querySelector(id)
    console.log(element);
    */
    // update = ()
    return true;
  }

  const useMemoTree = useMemo(() => {
  return (
    <div className="wrapperApp">
      <div className="innerApp">
        <div className="header"/>
        <div className="content">
       <TreeView tree ={tree} addNode={addNode} deleteNode={deleteNode} selectNode={selectNode}/>
       <NodeEditView selectedNode={selectedNode} renameNode={renameNode}/>
       </div>
       <div className="footer"/>
      </div>
    </div>
  );
}, [tree, selectedNode]);

return useMemoTree;
}

export default App;
