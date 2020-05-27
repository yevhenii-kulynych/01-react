import React from "react";

const Input = (props) => {
  return (
      <input onChange={props.handleInput} type="text"/>
  )
};

export default Input;