import React from 'react';
import DashboardMap from './DashboardMap';
import MapVisualization from './MapVisualization';
import heatmapdata2 from './data-biomass-greatforest';

function MapDetail() {
  // console.log(heatmapdata2);
  return (
    <div>
      <div className="detail-legend">
        <div className="legend-select wrap-drodown">
          <div className="btn-legend-select">
            <span className="label-select">BIOMASS</span>
            <img className="legend-select-icon" src="/static/iconos/arrow-head.svg" width="6" alt="" />
          </div>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Enlace 1
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Enlace 2
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Enlace 3
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Enlace 4
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
            padding-top: 16px;
            height: 108px;
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
          }

          .legend-select {
            display: inline-block;
            position: relative;
            margin-bottom: 10px;
            .label-select {
              cursor: pointer;
              text-transform: uppercase;
              color: #000;
              font-size: 12px;
              font-weight: 500;
              padding-left: 16px;
              padding-right: 10px;
            }
            &:hover {
              span {
                text-decoration: underline;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default MapDetail;
