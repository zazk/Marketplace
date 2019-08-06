import React, { Component } from 'react';
import dataProjects from '../../../projects-data/projects';
import BannerFeatureds from './BannerFeatured/';
import MapContainer from './MapContainer';
class PDP extends Component {
  render() {
    const project = dataProjects[0]['pdp'];
    const biomass = dataProjects[0]['biomass'];
    const geojson = dataProjects[0]['geojson'];

    console.log('geojson', geojson);
    return (
      <div>
        <BannerFeatureds data={project}></BannerFeatureds>
        <MapContainer data={project} geojson={geojson} />
      </div>
    );
  }
}

export default PDP;
