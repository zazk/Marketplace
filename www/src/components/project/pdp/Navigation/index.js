import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, NavigationContent, NavigationItem } from './style';
// import { Mixpanel } from '../utils/mixpanel';

function ProjectNavigation({ id, items, data }) {
  const prevdata = parseInt(id) - 1;
  const prev = prevdata < 0 ? items - 1 : prevdata;

  const nextdata = parseInt(id) + 1;
  const next = nextdata >= items ? 0 : nextdata;

  // function trackProjectNavigation(navigation, projectNumber) {
  //   if (user) {
  //     Mixpanel.identify(user.id);
  //   }
  //   Mixpanel.track('Project Navigation', {
  //     navigation: navigation,
  //     projectId: projectNumber,
  //   });
  // }

  return (
    <Navigation>
      <NavigationContent>
        <Link to={`/pdp/?id=${prev}`} onClick={() => prev}>
          <NavigationItem className="prev">
            <h5>{data[prev].pdp.title}</h5>
            <p>
              <img src="/static/iconos/icon-project-prev.svg" width="12" alt="" />
              Previous project
            </p>
          </NavigationItem>
        </Link>
        <Link to={`/pdp/?id=${next}`} onClick={() => next}>
          <NavigationItem className="next">
            <h5>{data[next].pdp.title}</h5>
            <p>
              Next project <img src="/static/iconos/icon-project-next.svg" width="12" alt="" />
            </p>
          </NavigationItem>
        </Link>
      </NavigationContent>
    </Navigation>
  );
}
export default ProjectNavigation;
