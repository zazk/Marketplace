import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../LoginButton';
import { Logo, HeaderMain, HeaderInner, Nav, MenuItem, MenuLink, MenuUser } from './style';

function Header() {
  return (
    <HeaderMain>
      <HeaderInner>
        <Logo>
          <img src="/static/assets/images/logo-pachama.svg" width="92" height="23" alt="" />
        </Logo>
        <Nav>
          <ul className="flex nav-list">
            <MenuItem>
              <Link to="/">
                <MenuLink>Home</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">
                <MenuLink>About Us</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">
                <MenuLink>Contact Us</MenuLink>
              </Link>
            </MenuItem>
          </ul>
        </Nav>
        <MenuUser>
          <LoginButton type="dropdown" />
        </MenuUser>
      </HeaderInner>
    </HeaderMain>
  );
}
export default Header;
