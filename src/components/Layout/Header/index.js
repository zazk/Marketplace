import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
const Logo = styled.figure`
  margin: 0;
`;
const HeaderMain = styled.header`
  background-color: #fff;
`;
const HeaderInner = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  height: 70px;
  align-items: center;
  position: relative;
  background-color: #fff;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;
const Nav = styled.nav`
  margin-left: 27px;
`;
const MenuItem = styled.li`
  margin-left: 20px;
`;
const MenuLink = styled.span`
  text-decoration: none;
  font-size: 14px;
  color: #363636;
  transition: all 0.3s;
  font-family: 'Lato', sans-serif;
  &:hover {
    opacity: 0.5;
  }
`;

class Header extends Component {
  static propTypes = { user: PropTypes.object };
  //
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     data: null,
  //     user: {}
  //   };
  // }å
  //
  // componentDidMount() {
  //   console.log("fetchuser");
  //   fetch('/api/user')
  //     .then(response => response.json())
  //     .then(data => this.setState({ user: data }));
  // }

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
