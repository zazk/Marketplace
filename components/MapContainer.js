import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import DeckGL, { MapView, GeoJsonLayer, TileLayer, BitmapLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
//pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA

export const INITIAL_VIEW_STATE = {
  latitude: 44.31309548743646,
  longitude: -72.43456928875162,
  zoom: 7,
  maxZoom: 14,
  bearing: -10,
  pitch: 45,
};

export const lightSettings = {
  lightsPosition: [-125, 50.5, 5000, -122.8, 48.5, 8000],
  ambientRatio: 0.2,
  diffuseRatio: 0.5,
  specularRatio: 0.3,
  lightsStrength: [2.0, 0.0, 1.0, 0.0],
  numberOfLights: 3,
};

// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
//const tileServer = 'https://c.tile.openstreetmap.org/';
//const tileServer = 'https://c.tile.openstreetmap.org/';
const tileServer = 'https://storage.googleapis.com/new-england-biomass/neBiomass';
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
    this.state = {};
    (this.mapWidgetElement = null), (this._onHover = this._onHover.bind(this));
    this._renderTooltip = this._renderTooltip.bind(this);
    console.log(geojson);
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
        minZoom: 0,
        maxZoom: 13,
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
        opacity: 3,
        stroked: false,
        filled: true,
        extruded: true,
        wireframe: true,
        fp64: true,
        getElevation: 100,
        // getFillColor: 4,
        lightSettings,
        pickable: true,
        autoHighlight: true,
        getLineColor: [10, 10, 10],
        getColor: [20, 20, 220],
        getFillColor: [120, 100, 10, 100],
      }),
    ];
  }

  render() {
    const { controller = false } = this.props;
    const viewState = {
      ...this.state.viewState,
    };
    return (
      <div className="map-feature flex content">
        <div className="map-feature-descrip">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis, debitis aperiam animi ratione
          sapiente, aut incidunt est quo quam dolorum temporibus rem ut obcaecati voluptate, adipisci eos commodi?
          Lorem!
        </div>
        <DeckGL viewState={INITIAL_VIEW_STATE} layers={this._renderLayers()} controller={controller}>
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
          `}
        </style>
      </div>
    );
  }
}

export default MapContainer;
