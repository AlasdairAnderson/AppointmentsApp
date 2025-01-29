import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
  return (
    <div className='tile-list'>
      {props.list.map(({name, ...rest}) => {
        <Tile key={name} name={name} description={rest}/>
      })}
    </div>
  );
};
