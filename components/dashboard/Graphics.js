import React from 'react';
function Graphics() {
  return (
    <div className="wrap-graphics ">
      <h3 className="aside-title">Carbon Capture</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <img src="/static/iconos/icon-info.svg" alt="" />

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-1.png" alt="" />
          </figure>
        </div>
      </div>
      <h3 className="aside-title">Tree Cover</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>40.3%</span>
              <p>current cover</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <img src="/static/iconos/icon-info.svg" alt="" />

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-2.png" alt="" />
          </figure>
        </div>
      </div>

      <h3 className="aside-title">BIOMASS</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <img src="/static/iconos/icon-info.svg" alt="" />

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-3.png" alt="" />
          </figure>
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
            padding: 13px 16px;
            padding-bottom: 25px;
          }
          .graphic-info-item {
            width: 50%;
            p {
              margin: 0;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              text-transform: uppercase;
            }
            &:last-child {
              text-align: right;
            }
          }
          .graphic-number {
            span {
              font-family: 'Work Sans', sans-serif;
              font-weight: 400;
              font-size: 32px;
            }
          }
          .graphic-date {
            span {
              font-size: 20px;
              font-family: 'Work Sans', sans-serif;
              font-weight: 500;
              margin-right: 5px;
            }
          }
          .detail-graphic {
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
            background-color: #ffffff;
            figure {
              img {
                max-width: 100%;
                height: auto;
                display: block;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default Graphics;
