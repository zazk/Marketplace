import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    const Component = this.props.component;
    const route = this.props.route;
    //const user  = this.props.user;
    return (
      <div>
        <h1>Pachama Marketplace</h1>
        <Header />
        <Component route={route} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
