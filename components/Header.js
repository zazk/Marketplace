import Link from 'next/link';
import MenuResponsive from './MenuResponsive';
function Header() {
  return (
    <header className="header">
      <div className="content flex">
        <figure className="logo">
          <img src="/static/assets/images/logo-pachama.svg" width="92" height="23" alt="" />
        </figure>
        <nav>
          <ul className="flex nav-list">
            <li className="menu-item">
              <Link href="/">
                <a className="menu-link">Home</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/about">
                <a className="menu-link">About Us</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contact">
                <a className="menu-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <MenuResponsive />
        <div className="head-btn">
          <button className="btn">
            <span>Request</span>
            <img className="btn-icon" src="/static/iconos/arrow-down-white.svg" alt="" />
          </button>
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
        `}
      </style>
    </header>
  );
}
export default Header;
