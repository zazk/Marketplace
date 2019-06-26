import React from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import Home from '../components/Home';

class Index extends React.Component {
  render() {
    const { router } = this.props;
    // console.log(router)
    return (
      <Layout>
        <Home id={router.query.id} />
      </Layout>
    );
  }
}

export default withRouter(Index);
