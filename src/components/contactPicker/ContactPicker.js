import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange} value={props.value} >
      <option default value="">No Contact Selected</option>
      {Object.values(props.list).map((element) => {
        return <option value={element.name}>{element.name}, {element.email}, {element.phone}</option>
      })}
    </select>
  );
};
