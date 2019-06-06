import React from 'react';
import ItemCard from './ItemCard';
import ItemText from './ItemText';

function Biomass({ data }) {
  const project = data;
  return (
    <div className="biomass">
      <div className="content">
        <ItemText
          icontitle="/static/iconos/globe-europe-solid.svg"
          title="Biomass: looking good"
          description="We could definitely mention something about how everything is going on this project, but we should definitely."
          source="OPD"
          page="40"
        />
        <div className="biomass-grafico" />
        <div className="biomas-grafico-detail flex">
          <figure>
            <img src="/static/assets/images/graphic.svg" width="763" height="250" alt="" />
          </figure>
          <div className="biomass-detail">
            <div className="graphic-item first">
              <span />
              <p>possible data here</p>
            </div>
            <div className="graphic-item second">
              <span />
              <p>possible data here</p>
            </div>
            <div className="graphic-item three">
              <span />
              <p>possible data here</p>
            </div>
          </div>
        </div>

        <div className="biomass-items flex">
          <ItemCard title="Additionality" status={true} />
          <ItemCard title="Leakage" status={true} />
          <ItemCard title="Permanence" status={true} />
          <ItemCard title="Verifiability" status={true} />
        </div>
      </div>

      <style jsx>
        {`
          .biomass {
            .content {
              padding-top: 34px;
              padding-bottom: 34px;
            }
          }
          .biomass-grafico {
            margin-top: 22px;
          }
          .biomas-grafico-detail {
            justify-content: space-between;
            figure {
              width: 54%;
            }
            @media screen and (max-width: 640px) {
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
            border-radius: 4px;
            box-shadow: 0 2px 10px 0 rgba(3, 9, 34, 0.15);
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 768px) {
              width: 45%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              order: -1;
              margin-bottom: 20px;
            }
          }

          .biomass-items {
            margin-top: 50px;
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
        `}
      </style>
    </div>
  );
}
export default Biomass;
