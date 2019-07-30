import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import theme from '../utils/theme';
//import FormGocarbon from "../components/forms/FormGocarbon";
import MenuResponsive from './MenuResponsive';
function Header() {
  const [fixNav, setfixNav] = useState(0);

  const handleScroll = e => {
    let scrollBar = window.scrollY;

    if (scrollBar >= 400) {
      setfixNav(1);
    } else {
      setfixNav(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${fixNav === 1 && 'active'}`}>
      <div className="content flex">
        <a href="/" className="logo">
          <img src="/static/assets/images/logo-pachama.svg" width="132" height="33" alt="" />
        </a>
        <nav>
          <ul className="flex nav-list">
            <li className="menu-item">
              <Link href="/about-us">
                <a className="menu-link">About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <MenuResponsive />
        <div className="head-btn">
          <div className="h-btn-form" />
          <a href="http://staging.marketplace-www.marketplace.pachama.com/" className="btn line btn-request">
            <span>View projects</span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .head-btn {
            position: absolute;
            top: 0;
            right: 42px;
            height: 100%;
            align-items: center;
            display: flex;

            .btn {
              width: 170px;
            }
            @media screen and (max-width: 640px) {
              display: none;
            }
            @media screen and (max-width: 960px) {
              right: 15px;
              .h-btn-form {
                .btn {
                  width: 165px;
                }
              }
            }
            @media screen and (max-width: 745px) {
              display: none;
            }
          }
          .header {
            position: fixed;
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
            top: 0;
            left: 0;
            width: 100%;
            z-index: 5;
            .content {
              height: 70px;
              background-color: green;
              align-items: center;
              position: relative;
              background-color: #fff;
              max-width: none;
              padding: 0 42px;
              color: red;
              box-shadow: 0 2px 5px 0 rgba(65, 130, 142, 0.19);
              @media screen and (max-width: 480px) {
                justify-content: space-between;
              }
              @media screen and (max-width: 960px) {
                padding: 0 20px;
              }
            }
            &.active {
              .h-btn-form {
                opacity: 1;
              }
            }
          }
          .h-btn-form {
            opacity: 0;
            transition: all 0.3s;
            margin-right: 15px;
          }
          nav {
            margin-left: 80px;
            @media screen and (max-width: 745px) {
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
            font-size: 16px;
            color: ${theme.color.mono.black2};
            transition: all 0.3s;
            font-family: ${theme.fonts.secondary};
            font-weight: 400;
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
