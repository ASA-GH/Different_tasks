// import React from 'react';
// import './Dropdown.css';

// const Dropdown = () =>{
//   console.log("Dropdown")
// return (
// <div className="wrapDropdown" >
//   <ul>
//     <li>Add</li>
//     <li>Delete</li>
//   </ul>
// </div>
// )
// }
// export default Dropdown;
import React, { useEffect, useState, useRef } from "react";

// const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {
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
  // const handleChange = selectedValue => {
  //   onChange(selectedValue);
  //   setOpen(false);
  // };
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
      <div className="dropdownToggler"  onContextMenu={e => syntheticFunction(e)}>
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