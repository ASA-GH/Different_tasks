import React from 'react';
import './Node.css';


const NodeEdit = (props) =>{
 let  string ="Attributes of " + "root"
return <div className="nodeEdit">
  <div className= "nodeEditName">
<h2>{string}</h2>
</div>
<div id="searchBar" className="searchBar">
<form id ="formSearchBar">
<div className="wrapInput">
<input   id="inputLength" required/>
<label for="inputLength">Name</label>
</div>
 <div className="wrapInput">
       <input    id="inputLimit" required/>
       <label for="inputLimit">Value</label>
        </div>
       <button  id="buttonStart" type="button">Add</button>
</form>
        </div>
</div>
}
export default NodeEdit;