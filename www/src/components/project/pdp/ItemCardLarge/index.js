import React from 'react';
import { ItemTextFeature } from './style';
function ItemCardLarge({ icon }) {
  return (
    <ItemTextFeature>
      <img src={icon} alt="" />
      <p>
        Positive leakage: dead wood will also capture CO2; plus avoiding the use of concrete will spare us from
        emissions.
      </p>
    </ItemTextFeature>
  );
}
export default ItemCardLarge;
