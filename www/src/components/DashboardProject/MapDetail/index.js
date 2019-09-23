import React, { useState } from 'react';
import MapVisualization from './MapVisualization';
import heatmapdata2 from './data-biomass-greatforest';
import { Link } from 'react-router-dom';

import { DetailLegend, SelectControl, LegendSelect, LegendSelectIcon } from './style';
function MapDetail() {
  const [openDropdown, setDropdown] = useState(0);

  return (
    <div>
      <DetailLegend>
        <LegendSelect className={`wrap-drodown ${openDropdown === 1 && 'active'}`}>
          <div className="btn-legend-select ">
            <SelectControl className="open-select " onClick={() => setDropdown(1)} />
            <SelectControl className="close-select " onClick={() => setDropdown(0)} />
            <span className="label-select">Biomass</span>
            <LegendSelectIcon src="/static/iconos/arrow-head.svg" width="6" alt="" />
          </div>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <Link to="#">
                  <span className="dropdown-link">Carbon Inventory</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="#">
                  <span className="dropdown-link">Tree Cover</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="#">
                  <span className="dropdown-link">Fire Risk</span>
                </Link>
              </li>
            </ul>
          </div>
        </LegendSelect>
        <figure>
          <img src="/static/assets/images/graphic-biomass.png" width="234" alt="" />
        </figure>
      </DetailLegend>
      <MapVisualization data={heatmapdata2} />
    </div>
  );
}
export default MapDetail;
