import React from "react";
import './AddButton.css'

const AddButton = (props) => {

  return (
      <div className="btn-wrap">
        <button onClick={props.handleAddButton} id={props.id} className="add-btn">Add</button>
      </div>
  )
};

export default AddButton;
