import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles?.map((item, index) => {
        const {name, ...rest} = item;
        return (
          <Tile name={name} description={rest} key={`tile-${index}`}/>
        )
      })}
    </div>
  );
};