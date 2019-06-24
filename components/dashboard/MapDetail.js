import React, { useState } from 'react';
import DashboardMap from './DashboardMap';
import MapVisualization from './MapVisualization';
import heatmapdata2 from './data-biomass-greatforest';

function MapDetail() {
  const [openDropdown, setDropdown] = useState(0);

  return (
    <div>
      <div className="detail-legend">
        <div className={`legend-select wrap-drodown ${openDropdown === 1 && 'active'}`}>
          <div className="btn-legend-select ">
            <div className="open-select select-control" onClick={() => setDropdown(1)} />
            <div className="close-select select-control" onClick={() => setDropdown(0)} />
            <span className="label-select">Biomass</span>
            <img className="legend-select-icon" src="/static/iconos/arrow-head.svg" width="6" alt="" />
          </div>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Carbon Inventory
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Tree Cover
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Fire Risk
                </a>
              </li>
            </ul>
          </div>
        </div>
        <figure>
          <img src="/static/assets/images/graphic-biomass.png" width="234" alt="" />
        </figure>
      </div>
      <MapVisualization data={heatmapdata2} />
      <style jsx>
        {`
          .detail-legend {
            width: 234px;
            padding-top: 10px;
            border-radius: 10px;
            box-shadow: 0 0 1px 2px rgba(9, 43, 49, 0.14);
            background-color: #ffffff;
            box-sizing: border-box;
            position: absolute;
            top: 13px;
            left: 18px;
            z-index: 1;
            figure {
              border-radius: 0px 0px 10px 10px;
              overflow: hidden;

              img {
                max-width: 100%;
                height: auto;
                display: block;
              }
            }
          }
          .imagen-legend {
            display: flex;
            flex-flow: row wrap;
          }
          .numbers-legend {
            width: 33.33%;
            font-size: 12px;
            color: #969db6;
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: right;
            }
          }
          .legend-select-icon {
            transform: rotate(-90deg);
            margin-left: 10px;
          }

          .select-control {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .close-select {
            display: none;
          }

          .legend-select {
            display: inline-block;
            position: relative;
            min-width: 115px;
            margin-left: 10px;
            padding: 8px;
            cursor: pointer;
            .label-select {
              cursor: pointer;
              color: #000;
              font-size: 14px;
              font-weight: 500;
            }
            &:hover {
              box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
            }
            &.active {
              .legend-select-icon {
                transform: rotate(90deg);
              }
              .open-select {
                display: none;
              }
              .close-select {
                display: block;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default MapDetail;
