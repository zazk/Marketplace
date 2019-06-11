import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine, VictoryStack, VictoryArea, VictoryTheme } from 'victory';
import _ from 'underscore';
import { red } from 'ansi-colors';
import biomassProjects from '../projects-data/biomass.js';

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
        <VictoryArea style={{ data: { fill: '#e9ecf2' } }} interpolation="natural" data={biomassProjects[0]['5']} />
        <VictoryArea style={{ data: { fill: '#c1dfdb' } }} interpolation="natural" data={biomassProjects[0]['25']} />
        <VictoryArea style={{ data: { fill: '#e922f2' } }} interpolation="natural" data={biomassProjects[0]['50']} />
      </VictoryChart>
    );
  }
}

export default BiomassChart;
