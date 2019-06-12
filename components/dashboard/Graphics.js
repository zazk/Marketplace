import React from 'react';

function Graphics() {
  return (
    <div className="wrap-graphics">
      <div className="detail-graphic">
        <h3 className="graphic-title">
          Carbon capture
          <span />
        </h3>
        <figure>
          <img src="/static/assets/images/graphic-1.png" alt="" />
        </figure>
        <div className="wrap-graphic-info flex">
          <div className="graphic-number graphic-info-item">
            <span>13,467.67</span>
            <p>current cap (Tn co2)</p>
          </div>
          <div className="graphic-date graphic-info-item">
            <span>12/07/19</span>

            <img src="/static/iconos/icon-info.png" alt="" />

            <p>Last verification</p>
          </div>
        </div>
      </div>
      <div className="detail-graphic">
        <h3 className="graphic-title">
          Tree cover
          <span />
        </h3>
        <figure>
          <img src="/static/assets/images/graphic-2.png" alt="" />
        </figure>
        <div className="wrap-graphic-info flex">
          <div className="graphic-number graphic-info-item">
            <span>40.3%</span>
            <p>current cover</p>
          </div>
          <div className="graphic-date graphic-info-item">
            <span>12/07/19</span>

            <img src="/static/iconos/icon-info.png" alt="" />

            <p>Last verification</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .graphic-title {
            font-size: 12px;
            font-weight: 500;
            color: #000;
            margin-bottom: 15px;
            text-transform: uppercase;
            display: flex;
            span {
              display: inline-block;
              vertical-align: middle;
              width: 13px;
              height: 13px;
              border: solid 1px #979797;
              background-color: #d8d8d8;
              border-radius: 100%;
              margin-left: 5px;
            }
          }
          .wrap-graphic-info {
            align-items: flex-end;
          }
          .graphic-info-item {
            width: 50%;
            p {
              margin: 0;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              text-transform: uppercase;
            }
          }
          .graphic-number {
            span {
              font-size: 32px;
            }
          }
          .graphic-date {
            span {
              font-size: 20px;
              font-weight: 500;
              margin-right: 5px;
            }
          }
          .detail-graphic {
            padding-bottom: 20px;
            margin-bottom: 15px;
            border-bottom: 1px solid #302424;
          }
        `}
      </style>
    </div>
  );
}
export default Graphics;
