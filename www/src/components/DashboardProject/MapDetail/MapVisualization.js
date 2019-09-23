/* global window */
import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import { PhongMaterial } from '@luma.gl/core';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { TileLayer, BitmapLayer, GeoJsonLayer, MapView, View } from 'deck.gl';
import DeckGL from '@deck.gl/react';
//import testGeoJson from './geo.js';
import dataProjects from '../../../projects-data/projects';
const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA'; // eslint-disable-line
const tileServer = 'https://storage.googleapis.com/new-england-biomass/polok';
//const geojson = testGeoJson;

const index = 2;
const project = dataProjects[index]['pdp'];

const geojson = dataProjects[index]['geojson'];

// Source data CSV
//const DATA_URL =
//  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv'; // eslint-disable-line

// require('d3-request').csv('/static/assets/heatmap-data.csv', (error, response) => {
//   if (!error) {
//     const heatmapdata = response.map(d => [Number(d.lng), Number(d.lat)]);
//   }
// });

//const heatmapdata = require('./heatmap-data.csv').map(d => [Number(d.lng), Number(d.lat)]);
const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
});

const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 });

const material = new PhongMaterial({
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
});

const INITIAL_VIEW_STATE = {
  longitude: project.location.coordinates[0] + 0.025,
  latitude: project.location.coordinates[1],
  zoom: 11.6,
  minZoom: 10,
  maxZoom: 16,
  pitch: 40.5,
  bearing: -27.396674584323023,
};

const colorRange = [[1, 152, 189], [73, 227, 206], [216, 254, 181], [254, 237, 177], [254, 173, 84], [209, 55, 78]];

const elevationScale = { min: 1, max: 5 };

/* eslint-disable react/no-deprecated */
export class MapVisualization extends Component {
  static get defaultColorRange() {
    return colorRange;
  }

  constructor(props) {
    super(props);
    this.state = {
      elevationScale: elevationScale.min,
      viewState: INITIAL_VIEW_STATE,
    };

    this.startAnimationTimer = null;
    this.intervalTimer = null;

    this._onViewStateChange = this._onViewStateChange.bind(this);
    this._startAnimate = this._startAnimate.bind(this);
    this._animateHeight = this._animateHeight.bind(this);
  }

  componentDidMount() {
    this._animate();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && this.props.data && nextProps.data.length !== this.props.data.length) {
      this._animate();
    }
  }

  layerFilter({ layer, viewport }) {
    // console.log(layer);
    //console.log(viewport);
    if (viewport.id === 'minimap') {
      // Do not draw the car layer in the first person view
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    this._stopAnimate();
  }

  _animate() {
    this._stopAnimate();

    // wait 1.5 secs to start animation so that all data are loaded
    this.startAnimationTimer = window.setTimeout(this._startAnimate, 1500);
  }

  _startAnimate() {
    this.intervalTimer = window.setInterval(this._animateHeight, 20);
  }

  _stopAnimate() {
    window.clearTimeout(this.startAnimationTimer);
    window.clearTimeout(this.intervalTimer);
  }

  _animateHeight() {
    if (this.state.elevationScale === elevationScale.max) {
      this._stopAnimate();
    } else {
      this.setState({ elevationScale: this.state.elevationScale + 1 });
    }
  }

  _onViewStateChange({ viewState }) {
    this.setState({ viewState });
  }

  _renderLayers() {
    const { data, radius = 210, upperPercentile = 90, coverage = 0.9 } = this.props;
    const { autoHighlight = true, highlightColor = [60, 60, 60, 40] } = this.props;

    return [
      new TileLayer({
        pickable: false,
        onHover: this._onHover,
        autoHighlight,
        highlightColor,
        opacity: 1,
        // https://wiki.openstreetmap.org/wiki/Zoom_levels
        minZoom: 10,
        maxZoom: 16,
        renderSubLayers: props => {
          const { x, y, z, bbox } = props.tile;
          const { west, south, east, north } = bbox;

          return new BitmapLayer(props, {
            image: `${tileServer}/${z}/${x}/${y}`,
            bounds: [west, south, east, north],
          });
        },
      }),
      new HexagonLayer({
        id: 'heatmap',
        colorRange,
        coverage,
        data,
        elevationRange: [0, 600],
        elevationScale: this.state.elevationScale,
        extruded: true,
        getPosition: d => d,
        onHover: this.props.onHover,
        opacity: 1,
        pickable: Boolean(this.props.onHover),
        radius,
        upperPercentile,
        material,
      }),
      new GeoJsonLayer({
        id: 'objectSelected',
        data: geojson,
        lineWidthScale: 20,
        lineWidthMinPixels: 80,
        getLineColor: [0, 0, 0],
        getRadius: 80,
        getLineWidth: 100,
        opacity: 2,
        stroked: true,
        filled: true,
        extruded: true,
        wireframe: true,
        fp64: true,
        getElevation: 5,
        pickable: true,
        autoHighlight: true,
        getColor: [247, 4, 91],
        getFillColor: [178, 25, 255, 130],
      }),
    ];
  }

  render() {
    const { mapStyle = 'mapbox://styles/mapbox/satellite-v9' } = this.props;
    const { viewState } = this.state;

    return (
      <div className="detail-map">
        <DeckGL
          layers={this._renderLayers()}
          effects={[lightingEffect]}
          viewState={viewState}
          onViewStateChange={this._onViewStateChange}
          controller={true}
          views={[
            new MapView({ id: 'main' }),
            new MapView({
              id: 'minimap',
              // viewStateId: 'main',
              viewState: {
                id: 'main',
                zoom: 6,
                pitch: 0,
                bearing: 0,
              },
              controller: false,
              x: '75%',
              y: '70%',
              width: '20%',
              height: '25%',
              clear: true,
              // viewStateFilter: viewState => Object.assign(viewState, { zoom: 7, pitch: 0, bearing: 0 }),
            }),
          ]}
          layerFilter={this.layerFilter}
        >
          <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} mapboxApiAccessToken={MAPBOX_TOKEN} />
          <View id="minimap">
            <StaticMap
              reuseMaps
              mapStyle="mapbox://styles/mapbox/light-v10"
              preventStyleDiffing={true}
              mapboxApiAccessToken={MAPBOX_TOKEN}
            />
          </View>
        </DeckGL>
      </div>
    );
  }
}
export default MapVisualization;
