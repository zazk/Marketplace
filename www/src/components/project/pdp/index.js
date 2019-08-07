import React, { Component } from 'react';
import dataProjects from '../../../projects-data/projects';
import BannerFeatureds from './BannerFeatured/';
import MapContainer from './MapContainer';
import FeatureProduct from './FeatureProduct';

class PDP extends Component {
  render() {
    const project = dataProjects[0]['pdp'];
    // const biomass = dataProjects[0]['biomass'];
    const geojson = dataProjects[0]['geojson'];

    return (
      <div>
        <BannerFeatureds data={project}></BannerFeatureds>
        <MapContainer data={project} geojson={geojson} />
        <FeatureProduct data={project}></FeatureProduct>
      </div>
    );
  }
}

export default PDP;
