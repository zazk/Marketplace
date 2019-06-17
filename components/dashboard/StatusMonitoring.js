import React from 'react';
function StatusMonitoring() {
  return (
    <div className="wrap-status">
      <h3 className="aside-title">Status monitoring</h3>
      <div className="status-circles flex">
        <div className="status-item" style={{ backgroundColor: `#2ed971` }}>
          <img src="/static/iconos/icon-gota.svg" width="15" alt="" />
        </div>

        <div className="status-item" style={{ backgroundColor: `#ffcf35` }}>
          <img src="/static/iconos/icon-nube.svg" width="28" alt="" />
        </div>

        <div className="status-item" style={{ backgroundColor: `#ff6e5d` }}>
          <img src="/static/iconos/icon-hojas.svg" width="33" alt="" />
        </div>
      </div>
      <div className="wrap-status-text">
        <div className="status-text-item">
          <span className="status-color">
            <img src="/static/iconos/weather.svg" height="27" alt="" />
          </span>
          <p>Weather alert: forecast suggests the possibility of a drier than average season</p>
        </div>

        <div className="status-text-item">
          <span className="status-color">
            <img src="/static/iconos/plant.svg" height="27" alt="" />
          </span>
          <p>Plant health: no pests have been detected and plant health tests have been passed satisfactorily </p>
        </div>
      </div>
      <style jsx>
        {`
          .status-circles {
            margin-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .status-item {
            position: relative;
            width: 58px;
            height: 58px;
            margin-right: 12px;
            background-color: #fff;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &:last-child {
              margin-right: 0;
            }
            img {
              display: block;
              margin: auto;
            }
          }
          .wrap-status-text {
            padding-left: 20px;
            padding-right: 20px;
          }
          .status-text-item {
            font-size: 14px;
            color: #000;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
            background-color: #ffffff;
            margin-bottom: 16px;
            position: relative;
            padding-left: 45px;
            &:last-child {
              margin-bottom: 0;
            }
            p {
              margin: 0;
            }
          }
          .wrap-status-text {
            margin-bottom: 20px;
          }
          .status-color {
            position: absolute;
            top: 0;
            left: 10px;
            bottom: 0;
            margin: auto;
            width: 27px;
            height: 27px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            img {
              width: auto;
              height: 27;
            }
          }
        `}
      </style>
    </div>
  );
}
export default StatusMonitoring;
