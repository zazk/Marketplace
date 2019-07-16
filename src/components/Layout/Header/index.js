import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="content flex">
          <figure className="logo">
            <img src="/static/assets/images/logo-pachama.svg" width="92" height="23" alt="" />
          </figure>
          <nav>
            <ul className="flex nav-list">
              <li className="menu-item">
                <Link href="/login">
                  <a className="menu-link">Log In</a>
                </Link>
              </li>
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
        </div>
      </header>
    );
  }
}
export default Header;
