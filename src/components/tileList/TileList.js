import React from "react";
import { Tile } from '../tile/Tile.js'

export const TileList = (props) => {
  return (
    <div className='tile-list'>
      {props.list.map(({name, ...rest}) => {
        return <Tile key={name} name={name} description={rest}/>
      })}
    </div>
  );
};
