import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine, VictoryStack, VictoryArea, VictoryTheme } from 'victory';
import _ from 'underscore';
import { red } from 'ansi-colors';

export class BiomassChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setState({ data: this.getData() });
  }

  getData() {
    return _.range(7).map(() => {
      return [
        { x: 1, y: _.random(1, 5) },
        { x: 2, y: _.random(1, 10) },
        { x: 3, y: _.random(2, 10) },
        { x: 4, y: _.random(2, 10) },
        { x: 5, y: _.random(2, 15) },
      ];
    });
  }

  render() {
    return (
      <VictoryChart width="631" height="350" theme={VictoryTheme.material} animate={{ duration: 1000 }}>
        <VictoryArea
          style={{ data: { fill: '#e9ecf2' } }}
          interpolation="natural"
          data={[
            { x: 1, y: 5500, y0: 4500 },
            { x: 5, y: 6000, y0: 5000 },
            { x: 10, y: 4800, y0: 3800 },
            { x: 20, y: 4000, y0: 3000 },
            { x: 30, y: 3000, y0: 2000 },
            { x: 40, y: 2400, y0: 1000 },
            { x: 50, y: 2000, y0: 1 },
          ]}
        />
        <VictoryArea
          style={{ data: { fill: '#c1dfdb' } }}
          interpolation="natural"
          data={[
            { x: 1, y: 4000, y0: 3500 },
            { x: 5, y: 4300, y0: 3000 },
            { x: 10, y: 4100, y0: 2800 },
            { x: 20, y: 3500, y0: 2500 },
            { x: 30, y: 3000, y0: 2000 },
            { x: 40, y: 2400, y0: 1500 },
            { x: 50, y: 1000, y0: 1 },
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: '#63a3ac' },
            parent: { border: '1px solid #ccc' },
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
          data={[
            { x: 1, y: 5000 },
            { x: 5, y: 5500 },
            { x: 10, y: 4300 },
            { x: 20, y: 3800 },
            { x: 30, y: 2600 },
            { x: 40, y: 2000 },
            { x: 50, y: 1600 },
          ]}
        />
      </VictoryChart>
    );
  }
}

export default BiomassChart;
