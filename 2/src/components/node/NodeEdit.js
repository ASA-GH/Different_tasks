import React from 'react';
import './Node.css';


const NodeEdit = (props) =>{
 let  string ="Attributes of " + "root"
return <div className="nodeEdit">
  <div className= "nodeEditName">
<h4>{string}</h4>
</div>
<div className = "nodeEditContent">
  <div className = "attributes"></div>
 

</div>
</div>
}
export default NodeEdit;