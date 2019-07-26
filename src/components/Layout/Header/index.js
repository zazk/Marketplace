import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
  // }
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
      <header>
        <div className="content flex">
          <figure className="logo">
            <img src="/static/assets/images/logo-pachama.svg" width="92" height="23" alt="" />
          </figure>
          <nav>
            <ul className="flex nav-list">
              <li className="menu-item">
                {user ? (
                  <Link href="/auth/logout">
                    <a className="menu-link">Log Out</a>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <a className="menu-link">Log In</a>
                  </Link>
                )}
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

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
