import React from 'react';
import { Link } from 'react-router-dom';
import { ControlItem, ControlContent, Controls } from './style';
// import { Mixpanel } from '../utils/mixpanel';

function ControlsProject({ id, items, data }) {
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
    <Controls>
      <ControlContent>
        <Link to={`/pdp/?id=${prev}`} onClick={() => prev}>
          <ControlItem className="prev">
            <h5>{data[prev].title}</h5>
            <p>
              <img src="/static/iconos/icon-project-prev.svg" width="12" alt="" />
              Previous project
            </p>
          </ControlItem>
        </Link>
        <Link to={`/pdp/?id=${next}`} onClick={() => next}>
          <ControlItem className="next">
            <h5>{data[next].title}</h5>
            <p>
              Next project <img src="/static/iconos/icon-project-next.svg" width="12" alt="" />
            </p>
          </ControlItem>
        </Link>
      </ControlContent>
    </Controls>
  );
}
export default ControlsProject;
