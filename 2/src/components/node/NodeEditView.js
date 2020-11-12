import React from 'react';
import './Node.css';
import NodeEdit from "./NodeEdit"

const NodeEditView = (props) =>{

return <div className="nodeEditView">
  <div className = "horizontalLine1"/>
  <NodeEdit/>
  {/* <div className ="space"></div> */}
  <div className = "horizontalLine2"/>
  </div>
}
export default NodeEditView;