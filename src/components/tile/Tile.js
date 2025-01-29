import React from "react";

export const Tile = (props) => {
  console.log("Tile Received ", props)
  return (
    <div className="tile-container">
      <p className='tile-title'>{props.name}</p>
      {Object.values(props.description).map((element, index) => {
        return <p key={index} className='tile'>{element}</p>
      })}
    </div>
  );
};
