
import React, { useEffect, useState, useRef } from "react";
import './Dropdown.css';
 const Dropdown = (props) => {

  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click

      return;
    }
    // outside click
    setOpen(false);
  };

  const handler = (id, nodeHandler, action) =>{
    setOpen(false);
    nodeHandler(id, action);
  }

  const syntheticFunction = e => {
    setOpen(!open);
    e.preventDefault()
  };

  useEffect(() => {

    
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={node} className="dropdown">
      <div className="dropdownToggler"  onContextMenu={e => syntheticFunction(e)} onClick = {props.selectNode}>
       {props.value || props.placeholder}
      </div>
      {open && ( 
        <ul className="dropdown-menu">
            <li className="dropdown-menu-item" onClick={e=>handler(props.id, props.handler, "add")}>Add</li>
            <li className="dropdown-menu-item" >Export</li>
            {props.isRoot(props.id)? null :<li className="dropdown-menu-item" onClick={e=>handler(props.id, props.handler, "delete")}>Delete</li>}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;