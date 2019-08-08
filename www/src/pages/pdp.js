import React, { Component } from 'react';
import dataProjects from '../projects-data/projects';
import Hero from '../components/project/pdp/Hero';
import MapContainer from '../components/MapContainer';
import Overview from '../components/project/pdp/Overview';
import Biomass from '../components/project/pdp/biomass';
import Leakage from '../components/project/pdp/Leakage';
import Pay from '../components/project/pdp/Pay';
import ControlsProject from '../components/project/pdp/ControlsProject';

class PDP extends Component {
  render() {
    let index = 0;
    const itemsProject = dataProjects.length;
    const project = dataProjects[1]['pdp'];
    const biomass = dataProjects[1]['biomass'];
    const geojson = dataProjects[1]['geojson'];

    return (
      <div>
        <Hero data={project}></Hero>
        <MapContainer data={project} geojson={geojson} />
        <Overview data={project}></Overview>
        <Biomass data={project} biomass={biomass}></Biomass>
        <Leakage data={project} />
        <Pay data={project} />
        <ControlsProject id={index} items={itemsProject} data={dataProjects} />
      </div>
    );
  }
}

export default PDP;
