import React from 'react';

function DetailHead() {
  return (
    <div className="detail-header flex">
      <div className="head-left flex">
        <button className="volver-detail">
          <img src="/static/iconos/arrow-head.svg" width="14" height="28" alt="" />
        </button>
        <figure className="detail-logo-project">
          <img src="https://via.placeholder.com/90x28" width="90" alt="" />
        </figure>
        <h2 className="head-name-project">Boulder Creek National Reserve</h2>
      </div>
      <div className="head-right flex">
        <button className="detail-menu">
          <span>...</span>
        </button>
        <button className="detail-btn btn">REQUEST</button>
      </div>
      <style jsx>
        {`
          .detail-header {
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            height: 58px;
            border-bottom: 1px solid rgba(151, 151, 151, 0.3);
            box-sizing: border-box;
            .detail-logo-project {
              margin-left: 18px;
            }
            .detail-menu {
              text-align: center;
              position: relative;
              width: 30px;
              span {
                margin-top: 5px;
                font-size: 30px;
                font-weight: 700;
                position: absolute;
                top: -10px;
                left: 0;
              }
            }
            .btn {
              width: 133px;
              height: 39px;
              font-size: 14px;
              margin-left: 25px;
            }
            .head-name-project {
              margin: 0;
              font-size: 16px;
              line-height: 33px;
              font-weight: 50;
              margin-left: 13px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default DetailHead;
