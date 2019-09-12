/* global window */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StaticMap } from 'react-map-gl';
import { PhongMaterial } from '@luma.gl/core';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { TileLayer, BitmapLayer, GeoJsonLayer, MapView, View } from 'deck.gl';
import DeckGL from '@deck.gl/react';
import Router from 'next/router';
import ProjectItem from '../components/ProjectItem';
//import testGeoJson from './geo.js';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA'; // eslint-disable-line
const tileServer = 'https://storage.googleapis.com/new-england-biomass/polok';
//const geojson = testGeoJson;
import dataProjects from '../projects-data/projects';

const index = 2;
const project = dataProjects[index]['pdp'];
const biomass = dataProjects[index]['biomass'];

var featureCollection = {
  type: 'FeatureCollection',
  features: [],
};

var geoJsonFeatures = [];
for (let i = 0; i < dataProjects.length; i++) {
  var credits = dataProjects[i]['pdp']['credits_avail']['quatinty'];
  var area = dataProjects[i]['pdp']['total_land']['area'] + ' ' + dataProjects[i]['pdp']['total_land']['unit'];
  var url = '/pdp?id=' + i;
  var feature = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: dataProjects[i]['pdp']['location']['coordinates'],
    },
    properties: {
      name: dataProjects[i]['pdp']['title'],
      picture: dataProjects[i]['pdp']['main_picture'],
      location: dataProjects[i]['pdp']['location']['name'],
      credits: credits,
      area: area,
      url: url,
    },
  };
  geoJsonFeatures.push(feature);
}

const geojson = {
  type: 'FeatureCollection',
  features: geoJsonFeatures,
};

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
  zoom: 5,
  minZoom: 2,
  maxZoom: 8,
  pitch: 40.5,
  bearing: -27.396674584323023,
};

const colorRange = [[1, 152, 189], [73, 227, 206], [216, 254, 181], [254, 237, 177], [254, 173, 84], [209, 55, 78]];

const elevationScale = { min: 1, max: 5 };

/* eslint-disable react/no-deprecated */
export class MapListVisualization extends Component {
  static get defaultColorRange() {
    return colorRange;
  }

  constructor(props) {
    super(props);
    this.state = {
      elevationScale: elevationScale.min,
      viewState: INITIAL_VIEW_STATE,
      hoveredObject: null,
    };

    this._onHover = this._onHover.bind(this);
    this._onClick = this._onClick.bind(this);
    this._renderTooltip = this._renderTooltip.bind(this);

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

  _onHover({ x, y, object }) {
    this.setState({ x, y, hoveredObject: object });
  }

  _onClick({ x, y, object }) {
    Router.push(object.properties.url);
  }

  _renderTooltip() {
    const { x, y, hoveredObject } = this.state;
    return (
      hoveredObject && (
        <>
          <div className="tooltip-map" style={{ top: y, left: x }}>
            <div className="tooltip-inner">
              <ProjectItem
                customclass="small"
                picture={hoveredObject.properties.picture}
                location={hoveredObject.properties.location}
                name={hoveredObject.properties.name}
                credits={hoveredObject.properties.credits}
                area={hoveredObject.properties.area}
              />
              {/* <div className="tooltip-item">
                <h3 className="tooltip-title">{hoveredObject.properties.name}</h3>
                <ul className="tooltip-list">
                  <li>Credits Available: {hoveredObject.properties.credits}</li>
                  <li>Total Area: {hoveredObject.properties.area}</li>
                </ul>
              </div> */}
            </div>
          </div>
        </>
      )
    );
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
      new GeoJsonLayer({
        id: 'objectSelected',
        data: geojson,
        lineWidthScale: 20,
        lineWidthMinPixels: 50,
        getLineColor: [80, 150, 180],
        getRadius: 10,
        getLineWidth: 10,
        opacity: 1,
        stroked: true,
        filled: true,
        extruded: true,
        wireframe: true,
        fp64: true,
        getElevation: 10,
        pickable: true,
        autoHighlight: true,
        getColor: [10, 4, 91],
        getFillColor: [10, 200, 155, 130],
        onHover: this._onHover,
        onClick: this._onClick,
      }),
    ];
  }

  render() {
    const { mapStyle = 'mapbox://styles/pachama/ck0fwm1gc05431cpex3dg0djo' } = this.props;
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
          {this._renderTooltip}
          <View id="minimap">
            <StaticMap
              reuseMaps
              mapStyle="mapbox://styles/mapbox/light-v10"
              preventStyleDiffing={true}
              mapboxApiAccessToken={MAPBOX_TOKEN}
            />
          </View>
        </DeckGL>
        <style jsx global>
          {`
            .tooltip-map {
              position: absolute;
              z-index: 10;
              transform: translateX(-40px) translateY(30px);
            }
            .tooltip-list {
              li {
                position: relative;
                padding-left: 10px;
                &:after {
                  content: '';
                  width: 6px;
                  height: 6px;
                  position: absolute;
                  left: 0;
                  border-radius: 100%;
                  top: 8px;
                  background-color: #04b189;
                }
              }
            }
            .tooltip-title {
              margin-top: 0;
              margin-bottom: 5px;
              color: #04b189;
            }
            .tooltip-item {
              margin-bottom: 10px;
              font-size: 14px;
            }
            .tooltip-inner {
              background-color: #fff;
              border-radius: 7px;
              position: relative;
              z-index: 10;
              box-shadow: 0 15px 45px 0 rgba(109, 100, 206, 0.21);
              &:after {
                content: '';
                display: inline-block;
                position: absolute;
                bottom: 100%;
                left: 10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent #ffffff transparent;
              }
            }
            .detail-map {
              position: relative;
              width: 100vw;
              height: calc(100vh - 70px);
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
export default MapListVisualization;
