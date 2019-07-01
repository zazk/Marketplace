import React from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import LandingProjects from '../pages/landingprojects';
// import Home from '../components/Home';

class Index extends React.Component {
  render() {
    const { router, user } = this.props;

    return <LandingProjects id={router.query.id} user={user} />;
  }
}

export default withRouter(Index);
