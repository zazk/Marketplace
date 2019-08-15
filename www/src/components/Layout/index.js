import React, { Component } from 'react';
import Header from './Header';
import { GlobalStyle } from '../GlobalStyles';
import { AuthLogin } from '../GlobalStyles/Login';
class Layout extends Component {
  render() {
    const Component = this.props.component;
    const route = this.props.route;
    // const user = this.props.user;

    return (
      <div>
        <AuthLogin></AuthLogin>
        <GlobalStyle></GlobalStyle>
        <Header />
        <Component route={route} />
      </div>
    );
  }
}

export default Layout;
