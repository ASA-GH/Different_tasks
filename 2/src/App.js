import React, {useState, useMemo}from 'react';
import TreeView from "./components/tree/TreeView"
import Tree from "./components/tree/Tree.js"
import NodeEditView from "./components/node/NodeEditView"

import './App.css';

const App = () => {
const [tree, setTree] = useState(new Tree());

  const addNode = (id) =>{
    tree.createNode(id)
    setTree(tree)
  }
  const deleteNode = (id) =>{
    if (!tree.deleteChild(id))
      return false;

    setTree(tree)
    return true;
  }

  const useMemoTree = useMemo(() => {
  return (
    <div className="wrapperApp">
      <div className="innerApp">
        <div className="header"/>
        <div className="content">
       <TreeView tree ={tree} addNode={addNode} deleteNode={deleteNode}/>
       <NodeEditView />
       </div>
       <div className="footer"/>
      </div>
    </div>
  );
}, [tree]);

return useMemoTree;
}

export default App;
