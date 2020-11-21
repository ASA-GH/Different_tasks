import React, { useMemo, useState } from "react";
import "./Node.css";
import Dropdown from "./../dropdown/Dropdown";
import imgChevronDown from "./../../img/chevronDown.svg";
import imgChevronRight from "./../../img/chevronRight.svg";

export default function NodeView(props) {
  const [expanded, setExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(undefined);
  const [updateNode, setUpdateNode] = useState(false);
  let updateByIds = [];
  const registration = (updateById) => {
    updateByIds.push(updateById);
  };
  const update = () => {
    setUpdateNode(!updateNode);
  };
  const updateById = (id) => {
    if (props.node.id == id) {
      setUpdateNode(!updateNode);
      return;
    }
    for (let i in updateByIds) {
      updateByIds[i](id);
    }
  };
  const add = (id) => {
    props.addNode(id);

    if (!expanded) setExpanded(true);
    else update();
  };

  const remove = (id) => {
    if (props.deleteNode(id)) props.parentUpdate();
  };

  const select = (e) => {
    props.selectNode(props.node);
  };

  const handler = (id, action) => {
    if ("add" == action) add(id);
    else if ("export" == action) exportNode(id);
    else remove(id);
  };

  const exportNode = (id) => {
    let data = new Date().toLocaleDateString();
    console.log(data);
    let file = "export_" + data + ".json";
    download(file, props.node.export());
  };

  const download = (filename, text) => {
    let a = document.createElement("a");
    a.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    a.setAttribute("download", filename);

    a.style.display = "none";
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  };

  const prepare = () => {
    props.registration(updateById);

    let children = [];
    if (!expanded) return children;

    props.node.children.map((node) => {
      children.push(
        <NodeView
          id={node.id}
          size={props.size}
          level={props.level + 1}
          node={node}
          addNode={props.addNode}
          deleteNode={props.deleteNode}
          parentUpdate={update}
          selectNode={props.selectNode}
          registration={registration}
        />
      );
    });

    return children;
  };

  const renderNode = () => {
    const pointer = () => {
      if (!props.node.children.length) {
      } else {
        let chevron = !expanded ? (
          <img src={imgChevronRight} alt="+" />
        ) : (
          <img src={imgChevronDown} alt="-" />
        );
        return chevron;
      }
    };
    return (
      <div className="wrapNode">
        <div className="nodeView">
          <div className="nodeViewPoint">
            {".".repeat(props.size * props.level)}
          </div>
          <button
            className="expand"
            disabled={!props.node.children.length}
            onClick={() => setExpanded(!expanded)}
          >
            {pointer()}
          </button>
          <Dropdown
            placeholder={props.node.name}
            value={dropdown}
            onContextMenu={(v) => setDropdown(v)}
            selectNode={select}
            id={props.node.id}
            handler={handler}
            isRoot={props.node.isRoot()}
          />
        </div>
        {prepare()}
      </div>
    );
  };
  const useMemoNode = useMemo(() => {
    return <div>{renderNode()}</div>;
  }, [expanded, props, updateNode]);

  return useMemoNode;
}
