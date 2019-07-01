import React from 'react';
import LandingProjects from '../pages/landingprojects';

class Index extends React.Component {
  render() {
    const { user } = this.props;

    return <LandingProjects user={user} />;
  }
}

export default Index;
