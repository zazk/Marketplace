import Link from 'next/link';
import MenuResponsive from './MenuResponsive';
function Header() {
  return (
    <header className="header">
      <div className="content flex">
        <figure className="logo">
          <img src="https://via.placeholder.com/94x28" width="94" height="28" alt="" />
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
        <MenuResponsive />
      </div>
      <style jsx>
        {`
          .header .content {
            height: 56px;
            align-items: center;
            border-bottom: 1px solid rgba(151, 151, 151, 0.3);
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