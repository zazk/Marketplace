import React, { useState } from 'react';

function FilterList() {
  const [openDropdown, setDropdown] = useState(0);
  return (
    <div className="content-main ">
      <div className="projects-filters flex">
        <div className="project-search">
          <input type="text" placeholder="Search" />
          <button>
            <img src="/static/iconos/icon-lupa.svg" width="15" alt="" />
          </button>
        </div>
        <div className="wrap-filter-select flex">
          <div className={`wrap-drodown ${openDropdown === 1 && 'active'}`}>
            <div className="dropdown-btn ">
              <div className="dropdown-open dropdown-controls" onClick={() => setDropdown(1)} />
              <div className="dropdown-close dropdown-controls" onClick={() => setDropdown(0)} />
              <span className="dropdown-label">Zone</span>
              <img className="drop-down-icon" src="/static/iconos/arrow-down.svg" width="12" alt="" />
            </div>
            <div className="dropdown w100">
              <ul className="dropdown-main">
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    South Zone
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    North Zone
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    Three Zone
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`wrap-drodown ${openDropdown === 2 && 'active'}`}>
            <div className="dropdown-btn ">
              <div className="dropdown-open dropdown-controls" onClick={() => setDropdown(2)} />
              <div className="dropdown-close dropdown-controls" onClick={() => setDropdown(0)} />
              <span className="dropdown-label">Project type</span>
              <img className="drop-down-icon" src="/static/iconos/arrow-down.svg" width="12" alt="" />
            </div>
            <div className="dropdown">
              <ul className="dropdown-main">
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    Type 1
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    Type 2
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="">
                    Type 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .projects-filters {
            margin-bottom: 20px;
            align-items: center;
            justify-content: space-between;
            @media screen and (max-width: 640px) {
              .project-search {
                width: 100%;
                margin-bottom: 20px;
              }
              .wrap-filter-select {
                justify-content: center;
                width: 100%;
                .wrap-drodown {
                  margin-left: 10px;
                  margin-right: 10px;
                }
              }
            }
          }
          .content-main {
            width: 94%;
          }
          .project-search {
            width: 327px;
            position: relative;
            input {
              height: 40px;
              width: 100%;
              padding-left: 50px;
              box-sizing: border-box;
              border-radius: 17.5px;
              border: solid 1px #eeeeee;
              background-color: #ffffff;
              color: #030922;
              font-size: 14px;
              &:focus {
                border-color: #09c173;
              }
            }
            button {
              position: absolute;
              top: 14px;
              left: 17px;
            }
          }
          .wrap-filter-select {
            .wrap-drodown {
              margin-left: 40px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default FilterList;
