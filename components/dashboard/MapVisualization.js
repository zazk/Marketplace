/* global window */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StaticMap } from 'react-map-gl';
import { PhongMaterial } from '@luma.gl/core';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { TileLayer, BitmapLayer, GeoJsonLayer } from 'deck.gl';
import DeckGL from '@deck.gl/react';
import testGeoJson from './geo.js';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA'; // eslint-disable-line
const tileServer = 'https://storage.googleapis.com/new-england-biomass/dali';
const geojson = testGeoJson;

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
  longitude: -1.4157267858730052,
  latitude: 52.232395363869415,
  zoom: 6.6,
  minZoom: 5,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27.396674584323023,
};

const colorRange = [[1, 152, 189], [73, 227, 206], [216, 254, 181], [254, 237, 177], [254, 173, 84], [209, 55, 78]];

const elevationScale = { min: 1, max: 50 };

/* eslint-disable react/no-deprecated */
export class MapVisualization extends Component {
  static get defaultColorRange() {
    return colorRange;
  }

  constructor(props) {
    super(props);
    this.state = {
      elevationScale: elevationScale.min,
    };

    this.startAnimationTimer = null;
    this.intervalTimer = null;

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

  _renderLayers() {
    const { data, radius = 1000, upperPercentile = 100, coverage = 1 } = this.props;
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
        elevationRange: [0, 3000],
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
        getRadius: 100,
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

    return (
      <div className="detail-map">
        <DeckGL
          layers={this._renderLayers()}
          effects={[lightingEffect]}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
        >
          <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} mapboxApiAccessToken={MAPBOX_TOKEN} />
        </DeckGL>
        <style jsx>
          {`
            .detail-map {
              figure img {
                width: 100%;
                height: calc(100vh - 70px);
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export default MapVisualization;
