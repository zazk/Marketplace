import React from 'react';
import dataProjects from '../projects-data/projects';
import Features from './Features';
import FeatureProduct from './FeatureProduct';
import ImagenFeature from './ImagenFeature';
import MapContainer from './MapContainer';
import Biomass from './Biomass';
import Leakage from './Leakage';
import Pay from './Pay';
import ControlsProject from './ControlsProject';

function Home({ id }) {
  let index = id ? id : 0;
  const itemsProject = dataProjects.length;
  const project = dataProjects[index]['pdp'];
  const biomass = dataProjects[index]['biomass'];
  const geojson = dataProjects[index]['geojson'];
  return (
    <section className="home">
      <Features data={project} />
      <MapContainer data={project} geojson={geojson} />
      <FeatureProduct data={project} />
      <Biomass data={project} biomass={biomass} />
      <Leakage data={project} />
      <Pay data={project} />
      <ControlsProject id={index} items={itemsProject} data={dataProjects} />
    </section>
  );
}
export default Home;
