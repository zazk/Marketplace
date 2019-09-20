import React from 'react';
import ReactTooltip from 'react-tooltip';
import { CardContent, CardHeader, CardIcon } from './style';

function FeatureCard({ title, status, tooltip, tooltipid }) {
  return (
    <CardContent className={`item-card ${!status && 'disabled'}`}>
      <img className="item-card-image" src="/static/iconos/checked.svg" width="28" alt="" />
      <CardHeader>
        <h5>{title}</h5>
        <p>Checked</p>
      </CardHeader>
      <div className="link-imagen" data-tip data-for={tooltipid}>
        <CardIcon src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
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
    </CardContent>
  );
}
export default FeatureCard;
