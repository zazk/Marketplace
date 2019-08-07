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

function Biomass({ data, biomass }) {
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
        <BiomassItems>
          <ItemCard
            title="Additionality"
            status={true}
            tooltip="The proposed project reduces greenhouse gas emissions that would not be reduced through other incentives"
            tooltipid="additionality"
          />
          <ItemCard
            title="Leakage"
            status={true}
            tooltip="An additional criteria is leakage. A reduction of greenhouse gas emissions through one project might simply shift, or leak, to another location or activity"
            tooltipid="leakage"
          />
          <ItemCard
            title="Permanence"
            status={true}
            tooltip="Tied into leakage prevention is the standard of permanence. Greenhouse gases prevented from entering the atmosphere should be stopped permanently. "
            tooltipid="permanence"
          />
          <ItemCard
            title="Verifiability"
            status={true}
            tooltip="An objective third party must be able to look at project data and confirm that the carbon reductions are real and credible."
            tooltipid="verifiability"
          />
        </BiomassItems>
      </div>
    </BiomassContent>
  );
}
export default Biomass;
