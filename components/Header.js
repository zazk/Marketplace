import React, { useState } from 'react';
import Link from 'next/link';
import MenuResponsive from './MenuResponsive';
function Header(user) {
  const [openDropdown, setDropdown] = useState(0);
  ///static/assets/images/logo-company.png
  return (
    <header className="header">
      <div className="content flex">
        <figure className="logo">
          <a href="https://www.pachama.com/">
            <img src="/static/assets/images/logo-pachama.svg" width="132" height="33" alt="Pachama" />
          </a>
        </figure>
        <nav>
          <ul className="flex nav-list">
            <li className="menu-item">
              <Link href="/about">
                <a className="menu-link">About Us</a>
              </Link>
            </li>
            {typeof user.user != 'undefined' && (
              <>
                <li className="menu-item">
                  <Link href="/list">
                    <a className="menu-link">View Projects</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/maplist">
                    <a className="menu-link">View Map</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <MenuResponsive />
        <div className="head-btn">
          <nav>
            <ul className="flex nav-list">
              <li className="menu-item">
                {typeof user.user != 'undefined' && (
                  <div className="wrap-company-user">
                    <div className={`wrap-drodown ${openDropdown === 1 && 'active'}`}>
                      <div className="flex wrap-label-dropdown">
                        <div className="company-image" style={{ backgroundImage: `url(${user.user.picture})` }} />
                        <div className="dropdown-btn ">
                          <div className="dropdown-open dropdown-controls" onClick={() => setDropdown(1)} />
                          <div className="dropdown-close dropdown-controls" onClick={() => setDropdown(0)} />
                          <span className="dropdown-label company-name">{user.user.displayName}</span>
                          <img className="drop-down-icon" src="/static/iconos/arrow-down.svg" width="12" alt="" />
                        </div>
                      </div>

                      <div className="dropdown">
                        <ul className="dropdown-main">
                          <li className="dropdown-item">
                            <Link href="/logout">
                              <a className="dropdown-link">Log Out</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {typeof user.user == 'undefined' && (
                  <Link href="/login">
                    <a className="menu-link">Log In</a>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>
        {`
          .head-btn {
            position: absolute;
            top: 0;
            right: 10px;
            height: 100%;
            display: flex;
            align-items: center;
            .btn {
              width: 170px;
            }
            @media screen and (max-width: 640px) {
              display: none;
            }
          }
          .header .content {
            height: 70px;
            align-items: center;
            position: relative;
            background-color: #fff;
            box-shadow: 0 2px 5px 0 rgba(65, 130, 142, 0.19);
            /** border-bottom: 1px solid rgba(151, 151, 151, 0.3); **/
            @media screen and (max-width: 480px) {
              justify-content: space-between;
            }
          }
          nav {
            margin-left: 27px;
            @media screen and (max-width: 480px) {
              display: none;
            }
          }
          .menu-item {
            list-style: none;
            margin-left: 20px;
          }
          .menu-item:first-child {
            margin-left: 0px;
          }
          .menu-link {
            text-decoration: none;
            font-size: 14px;
            color: #363636;
            transition: all 0.3s;
            font-family: 'Lato', sans-serif;
          }
          .menu-link:hover {
            opacity: 0.5;
          }
          .company-name {
            font-size: 14px;
            color: #818490;
          }
          .company-image {
            width: 34px;
            height: 34px;
            background-size: 100%;
          }
          .wrap-label-dropdown {
            cursor: pointer;
            align-items: center;
            border: 1px solid transparent;
            padding: 5px;
            &:hover {
              border: 1px solid #eee;
            }
          }
        `}
      </style>
    </header>
  );
}
export default Header;
