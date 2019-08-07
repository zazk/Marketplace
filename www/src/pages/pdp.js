import React, { Component } from 'react';
import dataProjects from '../projects-data/projects';
import BannerFeatureds from '../components/project/pdp/BannerFeatured/';
import MapContainer from '../components/project/pdp/MapContainer';
import FeatureProduct from '../components/project/pdp/FeatureProduct';
import Biomass from '../components/project/pdp/biomass';

class PDP extends Component {
  render() {
    const project = dataProjects[0]['pdp'];
    const biomass = dataProjects[0]['biomass'];
    const geojson = dataProjects[0]['geojson'];

    return (
      <div>
        <BannerFeatureds data={project}></BannerFeatureds>
        <MapContainer data={project} geojson={geojson} />
        <FeatureProduct data={project}></FeatureProduct>
        <Biomass data={project} biomass={biomass}></Biomass>
      </div>
    );
  }
}

export default PDP;
