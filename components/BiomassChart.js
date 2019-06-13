import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLine, VictoryStack, VictoryArea, VictoryTheme } from 'victory';
import _ from 'underscore';
import { red } from 'ansi-colors';

function BiomassChart({ data }) {
  const biomass = data;
  return (
    <VictoryChart width="631" height="350" theme={VictoryTheme.material} animate={{ duration: 1000 }}>
      <VictoryArea style={{ data: { fill: '#e9ecf2' } }} interpolation="natural" data={biomass['5']} />
      <VictoryArea style={{ data: { fill: '#c1dfdb' } }} interpolation="natural" data={biomass['25']} />
      <VictoryArea style={{ data: { fill: '#17b363' } }} interpolation="natural" data={biomass['50']} />
    </VictoryChart>
  );
}
export default BiomassChart;
