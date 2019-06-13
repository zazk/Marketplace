import React from 'react';
function StatusMonitoring() {
  return (
    <div className="wrap-status">
      <h3 className="aside-title">Status monitoring</h3>
      <div className="status-circles flex">
        <div className="status-item">
          <img src="/static/assets/images/status-1.png" width="48" alt="" />
        </div>

        <div className="status-item">
          <img src="/static/assets/images/status-2.png" width="48" alt="" />
        </div>

        <div className="status-item">
          <img src="/static/assets/images/status-3.png" width="48" alt="" />
        </div>
      </div>
      <div className="wrap-status-text">
        <div className="status-text-item">
          <span className="status-color" style={{ borderColor: `#f5c428` }}>
            <i style={{ backgroundColor: `#f5c428` }} />
          </span>
          <p>Weather alert: forecast suggests very low humidity levels</p>
        </div>

        <div className="status-text-item">
          <span className="status-color" style={{ borderColor: `#e03623` }}>
            <i style={{ backgroundColor: `#e03623` }} />
          </span>
          <p>Plant health: there’s a very bad pest coming to eat every living spicies on this land</p>
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
            border: solid 1px #e2e5ed;
            &:last-child {
              margin-right: 0;
            }
            img {
              border-radius: 100%;
              display: block;
              margin: auto;
            }
            .status-color {
              width: 14px;
              height: 14px;
              border-radius: 100%;
              position: absolute;
              bottom: 0;
              right: 0;
              display: block;
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
            padding-left: 30px;
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
            left: 8px;
            bottom: 0;
            margin: auto;
            width: 14px;
            height: 14px;
            border: 1px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            i {
              width: 8px;
              display: block;
              height: 8px;
              border-radius: 100%;
              background-color: gray;
            }
          }
        `}
      </style>
    </div>
  );
}
export default StatusMonitoring;
