import React from 'react';
import { StatisticsWrap, StatisticsList, ItemStatistic, Number, Description } from './style';

const dataStatistics = [
  {
    number: '100,000',
    description: 'credits available',
  },
  {
    number: '75,020',
    description: 'Hectares',
  },
  {
    number: '750,654.21',
    description: 'Total biomass',
  },
];
function Statistics() {
  return (
    <StatisticsWrap>
      <StatisticsList>
        {dataStatistics.map((item, i) => (
          <ItemStatistic key={i}>
            <Number>{item.number}</Number>
            <Description>{item.description}</Description>
          </ItemStatistic>
        ))}
      </StatisticsList>
    </StatisticsWrap>
  );
}

export default Statistics;
