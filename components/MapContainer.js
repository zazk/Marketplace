import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import DeckGL, { MapView, GeoJsonLayer, TileLayer, BitmapLayer, FlyToInterpolator } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';

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
const tileServer = 'https://storage.googleapis.com/new-england-biomass/picasso';
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-72.8228759765625, 44.41808794374846],
            [-73.2952880859375, 44.16841480642917],
            [-73.09478759765624, 43.85631630786513],
            [-72.75970458984375, 43.64800079902171],
            [-72.03460693359375, 43.94141717295212],
            [-71.9549560546875, 44.23536047945612],
            [-72.44384765625, 44.46123053905879],
            [-72.60314941406249, 44.549377532663684],
            [-72.8228759765625, 44.41808794374846],
          ],
        ],
      },
    },
  ],
};

export class MapContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewState: {
        latitude: 43.81309548743646,
        longitude: -73.43456928875162,
        zoom: 10,
        maxZoom: 17,
        bearing: -10,
        pitch: 50,
      },
      geojson: this.props.data.location.geojson,
    };
    this._onViewStateChange = this._onViewStateChange.bind(this);
    (this.mapWidgetElement = null), (this._onHover = this._onHover.bind(this));
    this._renderTooltip = this._renderTooltip.bind(this);
  }

  componentDidMount() {
    this._goToProject();
  }

  _goToProject() {
    this.setState({
      viewState: {
        ...this.state.viewState,
        longitude: this.props.data.location.coordinates[0],
        latitude: this.props.data.location.coordinates[1],
        zoom: 16,
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
      <div className="map-feature flex content">
        <div className="imagen-info">
          <h3 className="info-title">BIOMASS</h3>
          <div className="info-figure">
            <img src="/static/assets/images/bar-colors.svg" width="285" alt="" />
            <div className="imagen-numbers">
              <div className="numbers-item">0</div>
              <div className="numbers-item">...</div>
              <div className="numbers-item">10,000</div>
            </div>
          </div>
          <div className="imagen-text-item">
            <h3>750,654.21 tn</h3>
            <p>Total biomass</p>
          </div>
          <div className="imagen-text-item">
            <h3>7,578.36 tn</h3>
            <p>Avg. biomass per quadrant</p>
          </div>
          <a className="link-imagen" href="">
            <img src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
            <p>What is biomass?</p>
          </a>
        </div>
        <DeckGL viewState={viewState} layers={this._renderLayers()} controller={controller}>
          {this._renderTooltip}
          <StaticMap
            mapboxApiAccessToken="pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA"
            mapStyle="mapbox://styles/mapbox/light-v10"
          />
        </DeckGL>
        <style jsx>
          {`
            .map-feature {
              position: relative;
              width: 100%;
              minwidth: 100%;
              height: 400px;
              maxwidth: 400px;
              maxheight: 400px;
              figure {
                width: 28%;
                height: 400px;
              }
              @media screen and (max-width: 480px) {
                figure {
                  width: 100%;
                  margin-bottom: 20px;
                  text-align: center;
                }
              }
            }
            .map-feature-descrip {
              width: 30%;
              height: 400px;
              z-index: 100;
              @media screen and (max-width: 480px) {
                width: 100%;
              }
            }
            .map-feature {
              background-color: #d8d8d8;
              justify-content: space-between;
            }
            .map-feature.content {
              padding: 26px;
              margin-top: 40px;
            }
            .imagen-info {
              z-index: 1000;
              width: 324px;
              padding: 20px;
              padding-bottom: 28px;
              box-sizing: border-box;
              height: 283px;
              border-radius: 6px;
              box-shadow: 0 2px 40px 0 rgba(38, 43, 65, 0.39);
              background-color: #ffffff;
              @media screen and (max-width: 640px) {
                width: 100%;
                text-align: center;
              }
              @media screen and (max-width: 480px) {
                height: auto;
              }
            }
            .info-figure {
              @media screen and (max-width: 640px) {
                max-width: 285px;
                margin: auto;
              }
            }
            .imagen-numbers {
              display: flex;
              flex-flow: row wrap;
              margin-bottom: 20px;
            }
            .numbers-item {
              width: 33.33%;
              font-size: 12px;
              color: #969db6;
              &:nth-child(2) {
                text-align: center;
              }
              &:last-child {
                text-align: right;
              }
            }
            .imagen-text-item {
              margin-bottom: 14px;
              h3,
              p {
                margin: 0;
              }
              h3 {
                margin: 0;
                font-size: 22px;
                font-weight: normal;
              }
              p {
                font-size: 14px;
                color: #969db6;
              }
              @media screen and (max-width: 480px) {
                text-align: left;
              }
            }
            .info-title {
              font-family: 'Work Sans', sans-serif;
              font-weight: 700;
              font-size: 16px;
              margin: 0;
              margin-bottom: 20px;
            }
            .imagen-feature {
              background-color: #969db6;
              justify-content: space-between;
            }
            .imagen-feature.content {
              padding: 65px 56px;
              margin-top: 60px;
              @media screen and (max-width: 480px) {
                padding: 55px 25px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default MapContainer;
