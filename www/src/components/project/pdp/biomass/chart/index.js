import React from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';
import PropTypes from 'prop-types';

function BiomassChart({ data }) {
  const charts = [
    {
      fill: '#e9ecf2',
      interpolation: 'natural',
      biomass: '5',
    },
    {
      fill: '#e9ecf2',
      interpolation: 'natural',
      biomass: '25',
    },
    {
      fill: '#e9ecf2',
      interpolation: 'natural',
      biomass: '50',
    },
  ];

  return (
    <VictoryChart width={631} height={350} theme={VictoryTheme.material} animate={{ duration: 1000 }}>
      {charts.map(({ fill, interpolation, biomass }, i) => (
        <VictoryArea key={i} style={{ data: { fill: fill } }} interpolation={interpolation} data={data[biomass]} />
      ))}
    </VictoryChart>
  );
}

BiomassChart.propTypes = {
  data: PropTypes.object,
};
export default BiomassChart;
