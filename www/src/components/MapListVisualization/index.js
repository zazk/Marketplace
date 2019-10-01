import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { TileLayer, BitmapLayer, GeoJsonLayer, MapView, View } from 'deck.gl';
import DeckGL from '@deck.gl/react';
import ProjectCard from '../project/Card';
import dataProjects from '../../projects-data/projects';
import { TooltipMap, TooltipInner, DetailMap } from './style';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA'; // eslint-disable-line
const tileServer = 'https://storage.googleapis.com/projects-biomass';

const index = 2;
const project = dataProjects[index]['pdp'];
const biomass = dataProjects[index]['biomass'];

var featureCollection = {
  type: 'FeatureCollection',
  features: [],
};

var geoJsonFeatures = [];
for (let i = 0; i < dataProjects.length; i++) {
  var progress = 80;
  var creditsStr = dataProjects[i]['pdp']['credits_avail']['quatinty'].toString();
  var credits = parseInt(creditsStr.replace(/,/g, ''));
  var totalCreditsStr = dataProjects[i]['pdp']['credits_issued']['quatinty'].toString();
  var totalCredits = parseInt(totalCreditsStr.replace(/,/g, ''));
  var areaStr = dataProjects[i]['pdp']['total_land']['area'];
  var area = areaStr + ' ' + dataProjects[i]['pdp']['total_land']['unit'];
  var url = '/pdp?id=' + i;
  if (credits > 0 && totalCredits > 0 && credits < totalCredits) {
    progress = Math.floor((credits / totalCredits) * 100);
  }
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
      progress: progress,
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

const INITIAL_VIEW_STATE = {
  longitude: project.location.coordinates[0] + 0.025,
  latitude: project.location.coordinates[1],
  zoom: 5,
  minZoom: 2,
  maxZoom: 13,
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
      selectedObject: null,
    };

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

  _onClick(info) {
    if (!info.object) {
      this.setState({
        x: info.x,
        y: info.y,
        selectedObject: null,
      });
    } else {
      this.setState({
        x: info.x,
        y: info.y,
        selectedObject: info.object,
      });
    }
  }

  _renderTooltip() {
    const { x, y, selectedObject } = this.state;
    if (selectedObject) {
      const projectInMap = {
        title: selectedObject.properties.name,
        main_picture: selectedObject.properties.picture,
        progress: selectedObject.properties.progress,
        credits_avail: {
          quatinty: `${selectedObject.properties.credits}`,
        },
        location: {
          name: selectedObject.properties.location,
        },
        total_land: {
          area: selectedObject.properties.area,
        },
      };
      console.log('projectInMap', projectInMap);
      return (
        selectedObject && (
          <>
            <TooltipMap style={{ top: y, left: x }}>
              <TooltipInner>
                <ProjectCard
                  project={projectInMap}
                  url={selectedObject.properties.url}
                  customClass="columns small"
                  area={selectedObject.properties.area}
                />
              </TooltipInner>
            </TooltipMap>
          </>
        )
      );
    }
  }

  _renderLayers() {
    const { data, radius = 210, upperPercentile = 90, coverage = 0.9 } = this.props;
    const { autoHighlight = true, highlightColor = [60, 60, 60, 40] } = this.props;
    return [
      new GeoJsonLayer({
        id: 'projects',
        data: geojson,
        lineWidthScale: 20,
        lineWidthMinPixels: 30,
        getLineColor: [100, 130, 90],
        getRadius: 10,
        getLineWidth: 10,
        opacity: 1,
        stroked: true,
        filled: true,
        extruded: true,
        wireframe: true,
        fp64: true,
        getElevation: 90,
        pickable: true,
        autoHighlight: true,
        getColor: [10, 4, 91],
        getFillColor: [10, 200, 155, 130],
        onClick: info => this._onClick(info),
      }),
      new TileLayer({
        pickable: false,
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
    ];
  }

  render() {
    const { mapStyle = 'mapbox://styles/pachama/ck0h6nzwy1buy1ctipdv1swze' } = this.props;
    const { viewState } = this.state;

    return (
      <DetailMap>
        <DeckGL
          layers={this._renderLayers()}
          effects={[lightingEffect]}
          viewState={viewState}
          onViewStateChange={this._onViewStateChange}
          controller={true}
          onClick={this._onClick}
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
      </DetailMap>
    );
  }
}
export default MapListVisualization;
