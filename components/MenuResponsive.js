import React, { useState } from 'react';
import Link from 'next/link';
function MenuResponsive() {
  const [openMenu, setOpenMenu] = useState(0);
  return (
    <div>
      <div className={`menu-mobile-open ${openMenu === 1 && 'active'}`} onClick={() => setOpenMenu(1)}>
        <img src="../static/iconos/menu.svg" width="35" height="35" alt="" />
      </div>

      <div className={`cnt-menu-responsive ${openMenu === 1 && 'active'}`} onClick={() => setOpenMenu(0)}>
        <div className={`menu-overlay ${openMenu === 1 && 'active'}`} />
        <div className={`menu-mobile-close ${openMenu === 1 && 'active'}`} onClick={() => setOpenMenu(0)}>
          <img src="../static/iconos/close.svg" width="25" height="25" alt="" />
        </div>
        <div className="menu-responsive">
          <figure className="logo">
            <img src="https://via.placeholder.com/94x28" width="94" height="28" alt="" />
          </figure>
          <nav>
            <ul className="nav-list">
              <li className="menu-item">
                <Link href="/">
                  <a className="menu-link">Home</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/about">
                  <a className="menu-link">About</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/contact">
                  <a className="menu-link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx global>
        {`
          .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            background-color: black;
            z-index: 1001;
            width: 100%;
            height: 0%;
            visibility: hidden;
            opacity: 0;
            cursor: pointer;
            transition: opacity 0.45s ease;
            &.active {
              opacity: 0.8;
              height: 100%;
              visibility: visible;
            }
          }
          .menu-responsive {
            position: relative;
            z-index: 1010;
            background-color: #fff;
            height: 100vh;
          }
          .cnt-menu-responsive {
            position: fixed;
            right: -200px;
            top: 0;
            width: 200px;
            z-index: 1000;
            visibility: hidden;
            transition: all 0.3s;
            &.active {
              visibility: visible;
              right: 0;
            }

            .logo {
              width: 100%;
              text-align: center;
              padding: 30px 10px;
              box-sizing: border-box;
              img {
                width: 100%;
                border: 1px solid gray;
              }
            }
            .menu-link {
              width: 100%;
              padding-left: 20px;
              box-sizing: border-box;
              display: flex;
              height: 40px;
              align-items: center;
              font-size: 16px;
              text-decoration: none;
              color: #363636;
            }
            .menu-mobile-close {
              background-color: #fff;
              border-radius: 3px;
              color: gray;
              cursor: pointer;
              height: 42px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: fixed;
              right: 5px;
              top: 5px;
              width: 42px;
              transform: rotate(0deg);
              visibility: hidden;
              opacity: 0;
              z-index: 1001;
              transition: all 0.45s ease;
              &.active {
                opacity: 1;
                visibility: visible;
                right: 205px;
                transform: rotate(-90deg);
              }
            }
          }
          .menu-mobile-open {
            display: none;
            transition: all 0.45s ease;

            &.active {
              visibility: hidden;
              opacity: 0;
              right: 220px;
              z-index: 1000;
              transform: rotate(-90deg);
            }
            @media screen and (max-width: 480px) {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
}
export default MenuResponsive;
