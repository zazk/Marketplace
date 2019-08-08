import React, { Component } from 'react';
import Header from './Header';
import { GlobalStyle } from '../GlobalStyles';
class Layout extends Component {
  render() {
    const Component = this.props.component;
    const route = this.props.route;
    // const user = this.props.user;

    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Header />
        <Component route={route} />
      </div>
    );
  }
}

export default Layout;
