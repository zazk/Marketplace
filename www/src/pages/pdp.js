import React from 'react';
import { withRouter } from 'react-router';
import dataProjects from '../projects-data/projects';
import Hero from '../components/project/pdp/Hero';
import MapContainer from '../components/MapContainer';
import Overview from '../components/project/pdp/Overview';
import Biomass from '../components/project/pdp/biomass';
import Features from '../components/project/pdp/Features';
import Summary from '../components/project/pdp/Summary';
import Leakage from '../components/project/pdp/Leakage';
import Pay from '../components/project/pdp/Pay';
import ControlsProject from '../components/project/pdp/ControlsProject';
import withAuth from '../hocs/withAuth';
function PDP({ location }) {
  const id = new URLSearchParams(location.search).get('id');
  let index = id ? id : 0;
  const { pdp, biomass, geojson } = dataProjects[index];
  return (
    <>
      <Hero data={pdp} />
      <MapContainer data={pdp} geojson={geojson} />
      <Overview data={pdp} />
      <Biomass data={pdp} biomass={biomass} />
      <Features data={pdp} />
      <Summary data={pdp} />
      <Pay data={pdp} />
      <ControlsProject id={index} items={dataProjects.length} data={dataProjects} />
    </>
  );
}
//export default withAuth(withRouter(PDP));
export default withRouter(PDP);
