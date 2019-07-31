import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo, HeaderMain, HeaderInner, Nav, MenuItem, MenuLink } from './style';

class Header extends Component {
  static propTypes = { user: PropTypes.object };

  render() {
    const { user } = this.props;
    return (
      <HeaderMain>
        <HeaderInner>
          <Logo>
            <img src="/static/assets/images/logo-pachama.svg" width="92" height="23" alt="" />
          </Logo>
          <Nav>
            <ul className="flex nav-list">
              <MenuItem>
                {user ? (
                  <Link href="/auth/logout">
                    <MenuLink>Log Out</MenuLink>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <MenuLink>Log In</MenuLink>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                <Link href="/">
                  <MenuLink>Home</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">
                  <MenuLink>About Us</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/contact">
                  <MenuLink>Contact Us</MenuLink>
                </Link>
              </MenuItem>
            </ul>
          </Nav>
        </HeaderInner>
      </HeaderMain>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
