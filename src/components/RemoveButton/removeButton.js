import React from "react";
import './RemoveButton.css';

const RemoveButton = (props) => {

  return (
      <div className="btn-wrap">
        <button onClick={props.handleRemoveButton} className="remove-btn" id={props.id}>Remove</button>
      </div>
  )
};

export default RemoveButton;
