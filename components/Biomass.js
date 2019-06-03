import React from 'react';
import ItemCard from './ItemCard';
import ItemText from './ItemText';

function Biomass() {
  return (
    <div className="biomass content">
      <ItemText
        title="Biomass: looking good"
        description="We could definitely mention something about how everything is going on this project, but we should definitely."
        source="OPD"
        page="40"
      />
      <div className="biomass-grafico">
        <div className="biomas-grafico-detail flex">
          <figure>
            <img src="/static/assets/images/grafico.png" width="564" height="250" alt="" />
          </figure>
          <div className="biomass-detail">
            <span className="biomass-circle" />

            <p className="biomass-description">
              <strong>Positive leakage:</strong> dead wood will also capture CO2; plus avoiding the use of concrete will
              spare us from emissions.
            </p>
          </div>
        </div>

        <div className="biomass-items flex">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      <style jsx>
        {`
          .biomass.content {
            padding-top: 34px;
            padding-bottom: 34px;
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
            width: 34%;
            @media screen and (max-width: 768px) {
              width: 45%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              order: -1;
              margin-bottom: 20px;
            }
          }
          .biomass-circle {
            width: 38px;
            height: 38px;
            display: block;
            border: solid 1px #979797;
            background-color: #d8d8d8;
            border-radius: 100%;
            margin-bottom: 18px;
          }
          .biomass-description {
            font-size: 16px;
            color: #4a4a4a;
          }
          .biomass-items {
            margin-top: 50px;
            @media screen and (max-width: 640px) {
              margin-top: 30px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Biomass;
