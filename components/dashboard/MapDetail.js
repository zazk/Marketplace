import React from 'react';
function MapDetail() {
  return (
    <div>
      <div className="detail-legend">
        <div className="legend-select wrap-drodown">
          <img className="legend-select-icon" src="/static/iconos/arrow-head.svg" width="6" alt="" />
          <span className="label-select">BIOMASS</span>
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
          <img src="/static/assets/images/bar-biomas.png" width="496" alt="" />
        </figure>
        <div className="imagen-legend">
          <div className="numbers-legend">0</div>
          <div className="numbers-legend">...</div>
          <div className="numbers-legend">10000</div>
        </div>
      </div>

      <div className="detail-map">
        <figure>
          <img src="https://via.placeholder.com/821x742" width="821" alt="" />
        </figure>
      </div>
      <style jsx>
        {`
          .detail-legend {
            width: 270px;
            padding: 15px;
            box-sizing: border-box;
            position: absolute;
            top: 13px;
            left: 18px;
            z-index: 1;
            background-color: #fff;
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
            position: absolute;
            top: 7px;
            right: 8px;
            transform: rotate(-90deg);
          }

          .legend-select {
            border: 1px solid #302424;
            display: inline-block;
            position: relative;
            margin-bottom: 10px;
            .label-select {
              cursor: pointer;
              text-transform: uppercase;
              color: #000;
              font-size: 12px;
              font-weight: 500;
              height: 25px;
              display: block;
              padding: 0 10px;
              padding-right: 30px;
              display: flex;
              align-items: center;
              &:hover {
                background-color: #ccc;
              }
            }
          }
          .detail-map {
            figure img {
              width: 100%;
              height: calc(100vh - 58px);
            }
          }
        `}
      </style>
    </div>
  );
}
export default MapDetail;
