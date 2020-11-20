import React, { useState, useMemo } from "react";
import TreeView from "./components/tree/TreeView";
import Tree from "./components/tree/Tree.js";
import NodeEdit from "./components/node/NodeEdit";
import "./App.css";

const App = () => {
  const [tree, setTree] = useState(new Tree());
  const [selectedNode, setSelectedNode] = useState({});

  let event = {};

  const addNode = (id) => {
    tree.createNode(id);
    setTree(tree);
  };

  const deleteNode = (id) => {
    if (!tree.deleteNode(id)) return false;

    setTree(tree);
    return true;
  };

  const selectNode = (node) => {
    setSelectedNode(node);
    if (event["onSelect"]) event["onSelect"](node);
  };

  const renameNode = (id, name) => {
    let node = tree.renameNode(id, name);
    if (!node) return false;
    setSelectedNode(node);
    setTree(tree);
    if (event["updateById"]) event["updateById"](id);
    return true;
  };

  const registration = (id, func) => {
    event[id] = func;
  };
  const addAttribute = (nodeId, attributeKey) => {
    tree.createAttribute(nodeId, attributeKey);
    setTree(tree);
  };

  const deleteAttribute = (nodeId, attributeKey) => {
    tree.deleteAttribute(nodeId, attributeKey);

    setTree(tree);
    return;
  };
  const changeAttributeKey = (nodeId, oldAttributeKey, newAttributeKey) => {
    tree.changeAttributeKey(nodeId, oldAttributeKey, newAttributeKey);
    setTree(tree);
  };
  const changeAttributeValue = (nodeId, attributeKey, attributeValue) => {
    tree.changeAttributeValue(nodeId, attributeKey, attributeValue);
    setTree(tree);
  };

  const useMemoTree = useMemo(() => {
    return (
      <div className="wrapperApp">
        <div className="innerApp">
          <div className="header" />
          <div className="content">
            <TreeView
              tree={tree}
              addNode={addNode}
              deleteNode={deleteNode}
              selectNode={selectNode}
              registration={registration}
            />
            <NodeEdit
              selectedNode={selectedNode}
              renameNode={renameNode}
              registration={registration}
              addAttribute={addAttribute}
              deleteAttribute={deleteAttribute}
              changeAttributeKey={changeAttributeKey}
              changeAttributeValue={changeAttributeValue}
            />
          </div>
          <div className="footer" />
        </div>
      </div>
    );
  }, [tree, selectedNode]);

  return useMemoTree;
};

export default App;
