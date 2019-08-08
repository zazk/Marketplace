import React, { Component } from 'react';
import dataProjects from '../projects-data/projects';
import BannerFeatureds from '../components/project/pdp/BannerFeatured/';
import MapContainer from '../components/project/pdp/MapContainer';
import FeatureProduct from '../components/project/pdp/FeatureProduct';
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
        <BannerFeatureds data={project}></BannerFeatureds>
        <MapContainer data={project} geojson={geojson} />
        <FeatureProduct data={project}></FeatureProduct>
        <Biomass data={project} biomass={biomass}></Biomass>
        <Leakage data={project} />
        <Pay data={project} />
        <ControlsProject id={index} items={itemsProject} data={dataProjects} />
      </div>
    );
  }
}

export default PDP;
