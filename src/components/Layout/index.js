import React, { Component } from 'react';
import Header from './Header';

class Layout extends Component {
  render() {
    const Component = this.props.component;
    const route = this.props.route;
    //const user  = this.props.user;
    return (
      <div>
        <Header />
        <Component route={route} />
      </div>
    );
  }
}

export default Layout;
