import React from 'react';

import {
  ContentMain,
  LegendInfo,
  LegendTitle,
  LegendScale,
  ScaleNumbers,
  ScaleNumber,
  LegendTextItem,
} from './style';

function MapLegend({ projectData }) {
  return (
    <ContentMain>
      <LegendInfo>
        <LegendTitle>BIOMASS</LegendTitle>
        <LegendScale>
          <img src="/static/assets/images/bar-colors.svg" width="285" alt="" />
          <ScaleNumbers>
            <ScaleNumber>0</ScaleNumber>
            <ScaleNumber>...</ScaleNumber>
            <ScaleNumber>300</ScaleNumber>
          </ScaleNumbers>
        </LegendScale>
        <LegendTextItem>
          <h3>{projectData.totalBiomass}</h3>
          <p>Total biomass</p>
        </LegendTextItem>
        <LegendTextItem>
          <h3>{projectData.medianBiomass}</h3>
          <p>Median biomass per hectare</p>
        </LegendTextItem>
        <div className="link-imagen">
          <img src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
          <p>What is biomass?</p>
        </div>
      </LegendInfo>
    </ContentMain>
  );
}

export default MapLegend;
