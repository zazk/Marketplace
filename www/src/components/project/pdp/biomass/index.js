import React from 'react';
import ItemCard from '../ItemCard';
import ItemText from '../ItemText';
import BiomassChart from './chart';
import {
  BiomassContent,
  BiomasGraficoDetail,
  BiomassDetail,
  BiomassItems,
  GraphicItem,
  BiommasNumbers,
  BiomasNumberItem,
} from './style';

function Biomass({ biomass }) {
  return (
    <BiomassContent>
      <div className="content-main">
        <div className="biomass-intro">
          <ItemText
            icontitle="/static/iconos/globe-europe-solid.svg"
            title="Biomass"
            description="We use remote sensing technologies to measure aboveground biomass (ABG), which includes the stem, stump, branches, bark, seeds and foliage. The data is a product of annually composited satellite imagery, field observations, and LiDAR data."
          />
        </div>
        <BiomasGraficoDetail>
          <figure>
            <BiommasNumbers style={{ display: `none` }}>
              <BiomasNumberItem>
                <span>40.3%</span>
                <p>current cover</p>
              </BiomasNumberItem>
              <BiomasNumberItem className="info">
                <span>12/07/19</span>
                <span className="biommas-icon">
                  <img src="/static/iconos/icon-info.svg" alt="" />
                </span>
                <p>Last verification</p>
              </BiomasNumberItem>
            </BiommasNumbers>
            <BiomassChart data={biomass} />
          </figure>
          <BiomassDetail>
            <GraphicItem>
              <span />
              <p>5-95%</p>
            </GraphicItem>
            <GraphicItem>
              <span />
              <p>25-75%</p>
            </GraphicItem>
            <GraphicItem>
              <span />
              <p>50%</p>
            </GraphicItem>
          </BiomassDetail>
        </BiomasGraficoDetail>
      </div>
    </BiomassContent>
  );
}
export default Biomass;
