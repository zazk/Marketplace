import React from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import Home from '../components/Home';

class Index extends React.Component {
  render() {
    const { router, user } = this.props;
    // console.log(router)
    return <Home id={router.query.id} user={user} />;
  }
}

export default withRouter(Index);
