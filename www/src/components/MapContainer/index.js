import React, { PureComponent } from 'react';

import DeckGL, { GeoJsonLayer, TileLayer, BitmapLayer, FlyToInterpolator } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import MapLegend from './Legend';

import {
  FeatureMap,
  MapFeature,
} from './style';
//pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA
export const lightSettings = {
  lightsPosition: [-125, 50.5, 5000, -122.8, 48.5, 8000],
  ambientRatio: 0.2,
  diffuseRatio: 0.5,
  specularRatio: 0.3,
  lightsStrength: [2.0, 0.0, 1.0, 0.0],
  numberOfLights: 3,
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

// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
//const tileServer = 'https://c.tile.openstreetmap.org/';
//const tileServer = 'https://c.tile.openstreetmap.org/';
const tileServer = 'https://storage.googleapis.com/new-england-biomass/polok';

export class MapContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewState: {
        latitude: 43.81309548743646,
        longitude: -73.43456928875162,
        zoom: 8,
        maxZoom: 17,
        bearing: -10,
        pitch: 50,
      },
      geojson: this.props.geojson,
      projectData: this.props.data,
    };
    this._onViewStateChange = this._onViewStateChange.bind(this);
    // (this.mapWidgetElement = null), (this._onHover = this._onHover.bind(this));
    this._renderTooltip = this._renderTooltip.bind(this);
  }

  componentDidMount() {
    this._goToProject();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.state.projectData = this.props.data;
      this.setState({
        viewState: {
          ...this.state.viewState,
          longitude: this.state.projectData.location.coordinates[0],
          latitude: this.state.projectData.location.coordinates[1],
          zoom: 11.5,
          transitionDuration: 18000,
          transitionInterpolator: new FlyToInterpolator(),
        },
      });
    }
    if (this.props.geojson !== prevProps.geojson) {
      this.state.geojson = this.props.geojson;
    }
  }

  _goToProject() {
    this.setState({
      viewState: {
        ...this.state.viewState,
        longitude: this.state.projectData.location.coordinates[0],
        latitude: this.state.projectData.location.coordinates[1],
        zoom: 11.5,
        transitionDuration: 18000,
        transitionInterpolator: new FlyToInterpolator(),
      },
    });
  }

  _onViewStateChange({ viewState }) {
    this.setState({ viewState });
  }

  _onHover({ x, y, sourceLayer, tile }) {
    //this.setState({ x, y, hoveredObject: { sourceLayer, tile } });
  }

  _renderTooltip() {
    const { x, y, hoveredObject } = this.state;
    const { sourceLayer, tile } = hoveredObject || {};
    return (
      sourceLayer &&
      tile && (
        <div className="tooltip" style={{ left: x, top: y }}>
          tile: x: {tile.x}, y: {tile.y}, z: {tile.z}
        </div>
      )
    );
  }

  _renderLayers() {
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
        maxZoom: 17,
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
        data: this.state.geojson,
        opacity: 2,
        stroked: true,
        filled: true,
        extruded: true,
        wireframe: false,
        fp64: true,
        getElevation: 3,
        lightSettings,
        pickable: true,
        autoHighlight: true,
        getLineColor: [255, 255, 255],
        getColor: [247, 4, 91],
        getFillColor: [178, 25, 255, 130],
      }),
    ];
  }

  render() {
    const { controller = false } = this.props;
    const { viewState } = this.state;
    return (
      <MapFeature>
        <MapLegend projectData={this.state.projectData} />
        <FeatureMap>
          <DeckGL viewState={viewState} layers={this._renderLayers()} controller={controller}>
            {this._renderTooltip}
            <StaticMap
              mapboxApiAccessToken="pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA"
              mapStyle="mapbox://styles/mapbox/light-v10"
            />
          </DeckGL>
        </FeatureMap>
      </MapFeature>
    );
  }
}

export default MapContainer;
