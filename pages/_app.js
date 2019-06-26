import React from 'react';
import App, { Container as NextContainer } from 'next/app';
import Head from 'next/head';
import LayoutUser from '../components/LayoutUser';

class PachamaMarketplace extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const props = {
      ...pageProps,
      user: this.state.user,
    };

    return (
      <NextContainer>
        <Component {...props} />
      </NextContainer>
    );
  }
}

export default PachamaMarketplace;
