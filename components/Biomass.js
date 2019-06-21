import React from 'react';
import ItemCard from './ItemCard';
import ItemText from './ItemText';
import BiomassChart from './BiomassChart';

function Biomass({ data, biomass }) {
  const project = data;
  return (
    <div className="biomass content">
      <div className="content-main">
        <div className="biomass-intro">
          <ItemText
            icontitle="/static/iconos/globe-europe-solid.svg"
            title="Biomass"
            description="We use remote sensing technologies to measure aboveground biomass (ABG), which includes the stem, stump, branches, bark, seeds and foliage. The data is a product of annually composited satellite imagery, field observations, and LiDAR data."
          />
        </div>
        <div className="biomas-grafico-detail flex">
          <figure>
            <div className="biommas-numbers flex">
              <div className="biomas-number-item">
                <span>40.3%</span>
                <p>current cover</p>
              </div>
              <div className="biomas-number-item info">
                <span>12/07/19</span>
                <span className="biommas-icon">
                  <img src="/static/iconos/icon-info.svg" alt="" />
                </span>
                <p>Last verification</p>
              </div>
            </div>
            <BiomassChart data={biomass} />
          </figure>
          <div className="biomass-detail">
            <div className="graphic-item first">
              <span />
              <p>5-95%</p>
            </div>
            <div className="graphic-item second">
              <span />
              <p>25-75%</p>
            </div>
            <div className="graphic-item three">
              <span />
              <p>50%</p>
            </div>
          </div>
        </div>
        <div className="biomass-items flex">
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
        </div>
      </div>

      <style jsx>
        {`
          .biomass {
            background-color: #fafafa;
            .content {
              padding-top: 34px;
              padding-bottom: 34px;
            }
          }
          .biomass-intro {
            max-width: 580px;
            @media screen and (max-width: 960px) {
              max-width: none;
            }
          }
          .biomass-grafico {
            margin-top: 22px;
          }
          .biomas-grafico-detail {
            justify-content: space-between;
            align-items: center;
            figure {
              width: 74%;
              border-radius: 10px;
              box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
              background-color: #ffffff;
              overflow: hidden;
            }
            @media screen and (max-width: 960px) {
              figure {
                width: 100%;
                img {
                  width: 100%;
                }
              }
            }
          }
          .biomass-detail {
            width: 217px;
            height: 124px;
            display: flex;
            flex-direction: column;
            padding-left: 60px;
            box-sizing: border-box;
            @media screen and (max-width: 960px) {
              height: auto;
              padding-left: 0;
              margin-bottom: 20px;
              width: 100%;
              flex-direction: row;
              justify-content: center;
              order: -1;
            }

            @media screen and (max-width: 640px) {
              width: 100%;
              order: -1;
              margin-bottom: 20px;
            }
            @media screen and (max-width: 480px) {
              flex-direction: column;
            }
          }

          .biomass-items {
            margin-top: 130px;
            border-radius: 6px;
            box-shadow: 0 3px 10px 2px rgba(3, 9, 34, 0.07), 0 0 4px 0 rgba(3, 9, 34, 0.05);
            background-color: #ffffff;
            padding-top: 18px;
            padding-bottom: 12px;
            justify-content: center;
            @media screen and (max-width: 640px) {
              margin-top: 30px;
            }
          }
          .graphic-item {
            display: flex;
            flex-flow: row nowrap;
            margin-bottom: 20px;
            align-items: center;
            @media screen and (max-width: 960px) {
              margin: 0px 10px;
              margin-bottom: 0px;
            }
            @media screen and (max-width: 480px) {
              margin-bottom: 10px;
            }
            &:last-child {
              margin-bottom: 0;
            }
            span {
              width: 49px;
              display: block;
              height: 17px;
              margin-right: 15px;
              background-color: #ebedf4;
            }
            p {
              margin: 0;
              color: #969db6;
            }
            &.second {
              span {
                opacity: 0.49;
                background-image: linear-gradient(to right, #cbd5ff, #17b363);
              }
            }
            &.three {
              span {
                height: 0px;
                box-sizing: border-box;
                border-style: solid;
                border-width: 3px;
                border-image-source: linear-gradient(to right, #8c9ad6, #17b363);
                border-image-slice: 1;
              }
            }
          }
          .biommas-numbers {
            justify-content: space-between;
            padding: 15px 15px;
            padding-bottom: 0;
            align-items: flex-end;
          }
          .biomas-number-item {
            span {
              font-size: 32px;
              font-family: 'Work Sans', sans-serif;
              line-height: 1;
            }
            p {
              margin: 0;
              color: rgba(0, 0, 0, 0.5);
              letter-spacing: 0.5px;
              text-transform: uppercase;
              font-size: 12px;
            }
            &.info {
              text-align: right;
              span {
                font-size: 20px;
              }
            }
            .biommas-icon {
              margin-left: 5px;
              img {
                width: 14px;
                height: auto;
              }
            }
            @media screen and (max-width: 480px) {
              span {
                font-size: 18px;
              }
              &.info {
                span {
                  font-size: 18px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default Biomass;
