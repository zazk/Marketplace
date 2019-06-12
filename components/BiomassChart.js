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
    const projectid = this.props.projectid;
    console.log(biomassProjects[projectid]);
    return biomassProjects[projectid];
  }

  render() {
    return (
      <VictoryChart width="631" height="350" theme={VictoryTheme.material} animate={{ duration: 1000 }}>
        <VictoryArea style={{ data: { fill: '#e9ecf2' } }} interpolation="natural" data={this.state.data['5']} />
        <VictoryArea style={{ data: { fill: '#c1dfdb' } }} interpolation="natural" data={this.state.data['25']} />
        <VictoryArea style={{ data: { fill: '#17b363' } }} interpolation="natural" data={this.state.data['50']} />
      </VictoryChart>
    );
  }
}

export default BiomassChart;
