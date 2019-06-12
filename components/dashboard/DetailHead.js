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
        <div className="wrap-menu-head wrap-drodown" data-position="right">
          <button className="detail-menu">
            <span>...</span>
          </button>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Menu 1
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Menu 2
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Menu 3
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Menu 4
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap-btn wrap-drodown" data-position="right">
          <button className="detail-btn btn">REQUEST</button>
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
            .wrap-menu-head {
              button {
                height: 100%;
              }
            }

            .wrap-btn {
              margin-left: 25px;
            }
            .btn {
              width: 133px;
              height: 39px;
              font-size: 14px;
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
