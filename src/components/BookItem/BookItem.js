import React from "react";
import './BookItem.css'
import AddButton from "../../components/AddButton/AddButton";
import RemoveButton from "../RemoveButton/removeButton";

const BookItem = (props) => {

  function ShowButtons(props) {
    const state = props.state;
    if (state) {
      return <AddButton handleAddButton={props.handleAddButton} id={props.id}/>;
    }
    return <RemoveButton handleRemoveButton={props.handleRemoveButton} id={props.id}/>;
  }

  return (
      <div className="book" key={props.id}>
        <div className="title-wrap">
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
        </div>
        <div className="img-wrap">
          <img className="thumbnail" src={props.smallThumbnail} alt="#"/>
          <p>{props.description}</p>
        </div>
        <p>{props.authors}</p>
        <p>{props.publishedDate}</p>
        <ShowButtons state={props.state} handleRemoveButton={props.handleRemoveButton} handleAddButton={props.handleAddButton} id={props.id}/>
      </div>
  )
};

export default BookItem;