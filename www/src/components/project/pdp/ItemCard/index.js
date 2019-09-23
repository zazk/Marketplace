import React from 'react';
import ReactTooltip from 'react-tooltip';
import { ItemCardDescripcion, ItemCardImage, ItemCardContent } from './style';

function ItemCard({ title, status, tooltip, tooltipid }) {
  return (
    <ItemCardContent className={`item-card ${!status && 'disabled'}`}>
      <img className="item-card-image" src="/static/iconos/checked.svg" width="28" alt="" />
      <ItemCardDescripcion>
        <h5>{title}</h5>
        <p>Checked</p>
      </ItemCardDescripcion>
      <div className="link-imagen" data-tip data-for={tooltipid}>
        <ItemCardImage src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
        <p>What is {title}?</p>
      </div>
      <ReactTooltip
        id={tooltipid}
        aria-haspopup="true"
        multiline={true}
        place="top"
        type="info"
        effect="solid"
        className="item-card-tooltip"
      >
        <p>{tooltip}</p>
      </ReactTooltip>
    </ItemCardContent>
  );
}
export default ItemCard;
