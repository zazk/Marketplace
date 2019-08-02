import React from 'react';
import dataProjects from '../projects-data/projects';
import Features from '../components/Features';
import FeatureProduct from '../components/FeatureProduct';
import Layout from '../components/layout';
import MapContainer from '../components/MapContainer';
import Biomass from '../components/Biomass';
import Leakage from '../components/Leakage';
import Pay from '../components/Pay';
import ControlsProject from '../components/ControlsProject';
import { withRouter } from 'next/router';
function Pdp({ user, router }) {
  const id = router.query.id;
  let index = id ? id : 0;
  const itemsProject = dataProjects.length;
  const project = dataProjects[index]['pdp'];
  const biomass = dataProjects[index]['biomass'];
  const geojson = dataProjects[index]['geojson'];
  return (
    <Layout title="PDP" user={user}>
      <section className="home">
        <Features data={project} user={user} />
        <MapContainer data={project} geojson={geojson} />
        <FeatureProduct data={project} />
        <Biomass data={project} biomass={biomass} />
        <Leakage data={project} />
        <Pay data={project} user={user} />
        <ControlsProject id={index} items={itemsProject} data={dataProjects} />
      </section>
    </Layout>
  );
}
export default withRouter(Pdp);
