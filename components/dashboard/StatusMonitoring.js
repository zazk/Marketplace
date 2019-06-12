import React from 'react';

function StatusMonitoring() {
  return (
    <div className="wrap-status">
      <h3 className="aside-title">Status monitoring</h3>
      <div className="status-circles flex">
        <div className="status-item">
          <img src="https://via.placeholder.com/48x48" width="48" alt="" />
          <span className="status-color" style={{ backgroundColor: `#5fb000` }} />
        </div>

        <div className="status-item">
          <img src="https://via.placeholder.com/48x48" width="48" alt="" />
          <span className="status-color" style={{ backgroundColor: `#5fb000` }} />
        </div>

        <div className="status-item">
          <img src="https://via.placeholder.com/48x48" width="48" alt="" />
          <span className="status-color" style={{ backgroundColor: `#f4ba00` }} />
        </div>

        <div className="status-item">
          <img src="https://via.placeholder.com/48x48" width="48" alt="" />
          <span className="status-color" style={{ backgroundColor: `#dc1700` }} />
        </div>
      </div>
      <div className="wrap-status-text">
        <div className="status-text-item">
          <p>Weather alert: forecast suggests very low humidity levels</p>
        </div>

        <div className="status-text-item">
          <p>Plant health: there’s a very bad pest coming to eat every living spicies on this land</p>
        </div>
      </div>
      <style jsx>
        {`
          .status-circles {
            justify-content: center;
            margin-bottom: 20px;
          }
          .status-item {
            position: relative;
            width: 48px;
            margin: 0 20px;
            img {
              border-radius: 100%;
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
          .status-text-item {
            font-size: 14px;
            color: #000;
            padding: 10px;
            background-color: #d8d8d8;
            border: 1px solid #979797;
            margin-bottom: 6px;
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
        `}
      </style>
    </div>
  );
}
export default StatusMonitoring;
