import React from 'react';
import LandingProjects from '../pages/landingprojects';

class Index extends React.Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.req) {
      console.log(ctx.req.user);
      if (ctx.req.user !== undefined) {
        ctx.res.writeHead(302, { Location: `/pdp` });
        ctx.res.end();
      }
      return {};
    }
  }

  render() {
    const { user } = this.props;

    return <LandingProjects user={user} />;
  }
}

export default Index;
