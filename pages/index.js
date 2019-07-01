import React from 'react';
import { withRouter } from 'next/router';
import LandingProjects from '../pages/landingprojects';

class Index extends React.Component {
  render() {
    const { router, user } = this.props;

    return <LandingProjects id={router.query.id} user={user} />;
  }
}

export default withRouter(Index);
