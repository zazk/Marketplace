import React, { Component } from 'react';
import { withRouter } from 'react-router';

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
    const parametersUrl = new URLSearchParams(this.props.location.search);
    const id = parametersUrl.get('id');
    let index = id ? id : 0;
    const quantityProjects = dataProjects.length;
    const project = dataProjects[index]['pdp'];
    const biomass = dataProjects[index]['biomass'];
    const geojson = dataProjects[index]['geojson'];
    return (
      <div>
        <Hero data={project}></Hero>
        <MapContainer data={project} geojson={geojson} />
        <Overview data={project}></Overview>
        <Biomass data={project} biomass={biomass}></Biomass>
        <Leakage data={project} />
        <Pay data={project} />
        <ControlsProject id={index} items={quantityProjects} data={dataProjects} />
      </div>
    );
  }
}

export default withRouter(PDP);
