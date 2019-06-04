import React from 'react';
import dataProjects from '../projects-data/projects';

import Intro from './Intro';
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
  const project = dataProjects[index];
  return (
    <section className="home">
      <Intro data={project} />
      <Features data={project} />
      <FeatureProduct data={project} />
      <MapContainer data={project} />
      <Biomass data={project} />
      <Leakage data={project} />
      <Pay data={project} />
      <ControlsProject id={index} items={itemsProject} />
    </section>
  );
}
export default Home;
