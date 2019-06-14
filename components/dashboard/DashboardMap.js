import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import DeckGL, {
  View,
  MapController,
  H3HexagonLayer,
  MapView,
  GeoJsonLayer,
  TileLayer,
  BitmapLayer,
  FlyToInterpolator,
} from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';

const INITIAL_VIEW_STATE = {
  latitude: 37.7749,
  longitude: 122.4194,
  zoom: 10,
  maxZoom: 17,
  bearing: -10,
  pitch: 50,
};

const tileServer = 'https://storage.googleapis.com/new-england-biomass/polok';
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

export class DashboardMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewState: {
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10,
        maxZoom: 17,
        bearing: -10,
        pitch: 50,
      },
      geojson: geojson,
    };
    //this._onViewStateChange = this._onViewStateChange.bind(this);
    (this.mapWidgetElement = null), (this._onHover = this._onHover.bind(this));
    this._renderTooltip = this._renderTooltip.bind(this);
  }

  componentDidMount() {
    //this._goToProject();
  }

  _goToProject() {
    this.setState({
      viewState: {
        ...this.state.viewState,
        latitude: 43.81309548743646,
        longitude: -73.43456928875162,
        zoom: 16,
        transitionDuration: 18000,
        transitionInterpolator: new FlyToInterpolator(),
      },
    });
  }

  _onViewStateChange({ viewState }) {
    //this.setState({ viewState });
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
  // new H3HexagonLayer({
  //   id: 'h3-hexagon-layer',
  //   hexLayerData,
  //   getHexagon: d => d.hexagon,
  //   getFillColor: d => [255, (1 - d.biomass / 500) * 255, 0],
  //   getElevation: d => d.biomass*2000
  // }),
  _renderLayers2() {
    const { autoHighlight = true, highlightColor = [60, 60, 60, 40] } = this.props;
    return [
      new H3HexagonLayer({
        id: 'h3hexagonlayer',
        hData,
        pickable: true,
        wireframe: false,
        filled: true,
        extruded: true,
        elevationScale: 20,
        getHexagon: d => d.hex,
        getFillColor: d => [255, (1 - d.count / 500) * 255, 0],
        getElevation: d => d.count,
      }),
    ];
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
        data: geojson,
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
    const { controller = true } = this.props;
    const { viewState } = this.state;
    return (
      <div className="detail-map">
        <DeckGL
          log={true}
          logPriority={4}
          initialViewState={INITIAL_VIEW_STATE}
          viewState={viewState}
          controller={controller}
          views={[
            new MapView({ id: 'main' }),
            new MapView({
              id: 'minimap',
              viewStateId: 'main',
              controller: false,
              x: '70%',
              y: '75%',
              width: '25%',
              height: '20%',
              clear: true,
              viewStateFilter: viewState => Object.assign(viewState, { zoom: 11, pitch: 0, bearing: 0 }),
            }),
          ]}
          layers={this._renderLayers()}
        >
          <StaticMap
            reuseMaps
            preventStyleDiffing={true}
            mapboxApiAccessToken="pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA"
            mapStyle="mapbox://styles/mapbox/light-v10"
          />
          <View id="minimap">
            <StaticMap
              reuseMaps
              mapStyle="mapbox://styles/mapbox/light-v10"
              preventStyleDiffing={true}
              mapboxApiAccessToken="pk.eyJ1IjoicGFjaGFtYSIsImEiOiJjam5xbWY4ZW8wOHhpM3FwaHN6azYzMXZzIn0.bGR3tnhiYFvPwVyU0WHjcA"
            />
          </View>
        </DeckGL>
        {this._renderTooltip}
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

export default DashboardMap;
