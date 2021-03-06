import React from "react";
import "./Tree.css";
import NodeView from "./../node/NodeView";

const TreeView = (props) => {
  let size = 4;
  let level = 0;
  let updater = () => {};

  const updateById = (id) => {
    updater(id);
  };

  const registration = (updateById) => {
    updater = updateById;
  };

  props.registration("updateById", updateById);
  return (
    <div className="treeView">
      <div className="innerTreeView">
        <NodeView
          id={props.tree.root.id}
          size={size}
          level={level}
          node={props.tree.root}
          addNode={props.addNode}
          deleteNode={props.deleteNode}
          registration={registration}
          selectNode={props.selectNode}
        />
      </div>
    </div>
  );
};

export default TreeView;
