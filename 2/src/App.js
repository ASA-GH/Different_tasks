import React, {useState, useMemo}from 'react';
import TreeView from "./components/tree/TreeView"
import Tree from "./components/tree/Tree.js"
import NodeEditView from "./components/node/NodeEditView"

import './App.css';

const App = () => {
const [tree, setTree] = useState(new Tree());

  const addNode = (id) =>{
 console.log(id)
 tree.createNode(id)

 setTree(tree)
 console.log("new tree")
 console.log(tree)
  }
  const useMemoTree = useMemo(() => {
  return (
    <div className="wrapperApp">
      <div className="innerApp">
       <TreeView tree ={tree} addNode={addNode}/>
       <NodeEditView />
      </div>
       
    </div>
  );
}, [tree]);

return useMemoTree;
}

export default App;
