import React, { useState } from 'react';
function DetailHead() {
  const [openDropdown, setDropdown] = useState(0);

  return (
    <div className="detail-header flex">
      <div className="head-left flex">
        <button className="volver-detail">
          <img src="/static/iconos/arrow-head.svg" width="11" alt="" />
        </button>
        <figure className="detail-logo-project">
          <img src="/static/assets/images/isotipo.png" width="30" alt="" />
        </figure>
        <h2 className="head-name-project">Middlebury College Improved Forest Management Project</h2>
      </div>
      <div className="head-right flex">
        <div className="wrap-menu-head wrap-drodown" data-position="right" style={{ display: `none` }}>
          <button className="detail-menu-btn">
            <span />
            <span />
            <span />
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
        <div className={`wrap-btn wrap-drodown type-two ${openDropdown === 1 && 'active'}`}>
          <button className="detail-btn btn">
            <span>Request</span>
            <img src="/static/iconos/arrow-down-white.svg" alt="" />
            <div className="open-select select-control" onClick={() => setDropdown(1)} />
            <div className="close-select select-control" onClick={() => setDropdown(0)} />
          </button>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Request drone LiDAR
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Request on-site visit
                </a>
              </li>
              <li className="dropdown-item">
                <a className="dropdown-link" href="">
                  Request verification
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
            height: 70px;
            border-bottom: 1px solid rgba(151, 151, 151, 0.3);
            box-sizing: border-box;
            .detail-logo-project {
              margin-left: 18px;
            }
            .detail-menu-btn {
              text-align: center;
              position: relative;
              width: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                width: 4px;
                height: 4px;
                margin: 0 2px;
                border-radius: 100%;
                display: block;
                background-color: #4a4a4a;
              }
            }
            .wrap-menu-head {
              button {
                height: 100%;
              }
            }

            .wrap-btn {
              margin-left: 25px;
              &.active {
                img {
                  transform: rotate(180deg);
                }
                .open-select {
                  display: none;
                }
                .close-select {
                  display: block;
                }
              }
            }
            .detail-btn {
              width: 173px;
              height: 50px;
              font-size: 16px;

              img {
                margin-left: 5px;
                position: relative;
                z-index: 2;
              }
            }
            .select-control {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 3;
              width: 100%;
              height: 100%;
            }
            .close-select {
              display: none;
            }
            .head-name-project {
              margin: 0;
              font-size: 16px;
              line-height: 33px;
              margin-left: 13px;
              font-family: serif;
              font-family: 'Work Sans', sans-serif;
              font-weight: 600;
            }
          }
        `}
      </style>
    </div>
  );
}
export default DetailHead;
