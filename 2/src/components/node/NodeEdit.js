import React, { useState } from "react";
import "./Node.css";
import Attribute from "./../attribute/Attribute";

const NodeEdit = (props) => {
  const [plus, setPlus] = useState(false);
  const [current, setCurrent] = useState(props.selectedNode);
  const [input, setInput] = useState(current.name);
  const [updateAttribute, setUpdateAttribute] = useState(false);
  const [disabled, setDisabled] = useState(true);

  let stringName = "Node name";
  let stringAttribute = "- Attributes -";
  const update = () => {
    setUpdateAttribute(!updateAttribute);
  };
  const createNameAttribute = (node) => {
    let i = 1;
    while (true) {
      let name = "new attribute " + i;
      if (!node.attributes) return name;
      if (!Object.keys(node.attributes).includes(name)) return name;
      i++;
    }
  };
  const deleteAttribute = (nodeId, attributeKey) => {
    props.deleteAttribute(nodeId, attributeKey);
  };
  const addAttributes = (node) => {
    props.addAttribute(node.id, createNameAttribute(node));
    if (!plus) setPlus(true);
    else update();
  };
  const select = (node) => {
    setCurrent(node);
    setInput(node.name);
    setDisabled(false);
  };

  const handler = (node, action) => {
    if ("add" == action) {
      addAttributes(node);
    }
  };
  const syntheticFunction = (e) => {
    props.renameNode(current.id, e.target.value);
    setInput(e.target.value);
  };
  const prepareAttributes = () => {
    let arr = [];
    if (!current.attributes) return arr;
    let keys = Object.keys(current.attributes);
    keys.sort();
    for (let i in keys) {
      let n = keys[i];
      arr.push(
        <Attribute
          key={i}
          node={current}
          n={n}
          value={current.attributes[n]}
          deleteAttribute={deleteAttribute}
          changeAttributeKey={props.changeAttributeKey}
          changeAttributeValue={props.changeAttributeValue}
          parentUpdate={update}
        />
      );
    }
    return arr;
  };
  props.registration("onSelect", select);
  props.registration("add", addAttributes);
  return (
    <div className="nodeEditView">
      <div className="horizontalLine1" />
      <div className="nodeEdit">
        <div className="nodeEditName">
          <span>{stringName}</span>
          <input
            className="inputName"
            value={input}
            onInput={(e) => syntheticFunction(e)}
            disabled={disabled || current.isRoot()}
          />
        </div>
        <div className="nodeEditAttribute">
          <h4>{stringAttribute}</h4>
        </div>
        <div className="nodeEditContent">
          <div className="attributesLabel">
            <div className="label">Name</div>
            <div className="label">Value</div>
            <div></div>
          </div>
          <div className="attributesContent">
            <div className=" ">{prepareAttributes()}</div>
            <button className="Plus" onClick={(e) => handler(current, "add")}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="horizontalLine2" />
    </div>
  );
};
export default NodeEdit;
