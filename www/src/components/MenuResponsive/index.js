import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuOverlay,
  MenuResponsiveSidebar,
  MenuMobileOpen,
  MenuMobileClose,
  LogoCompany,
  MenuItem,
  MenuLink,
  WrapMenuResponsive,
} from './style';
function MenuResponsive() {
  const [openMenu, setOpenMenu] = useState(0);
  return (
    <div>
      <MenuMobileOpen className={openMenu === 1 && 'active'} onClick={() => setOpenMenu(1)}></MenuMobileOpen>

      <WrapMenuResponsive className={openMenu === 1 && 'active'} onClick={() => setOpenMenu(0)}>
        <MenuOverlay className={openMenu === 1 && 'active'} />
        <MenuMobileClose className={openMenu === 1 && 'active'} onClick={() => setOpenMenu(0)}></MenuMobileClose>
        <MenuResponsiveSidebar>
          <LogoCompany>
            <img src="/static/assets/images/logo-pachama.svg" width="94" alt="" />
          </LogoCompany>
          <nav>
            <ul className="nav-list">
              <MenuItem>
                <Link to="/">
                  <MenuLink>Home</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about">
                  <MenuLink>About</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact">
                  <MenuLink>Contact Us</MenuLink>
                </Link>
              </MenuItem>
            </ul>
          </nav>
        </MenuResponsiveSidebar>
      </WrapMenuResponsive>
    </div>
  );
}
export default MenuResponsive;
