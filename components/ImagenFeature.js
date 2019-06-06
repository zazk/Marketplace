import React from 'react';
function ImagenFeature() {
  return (
    <div className="imagen-feature flex content">
      <div className="imagen-info">
        <h3 className="info-title">BIOMASS</h3>
        <div className="info-figure">
          <img src="/static/assets/images/bar-colors.svg" width="285" alt="" />
          <div className="imagen-numbers">
            <div className="numbers-item">0</div>
            <div className="numbers-item">...</div>
            <div className="numbers-item">10000</div>
          </div>
        </div>
        <div className="imagen-text-item">
          <h3>750,654.21 tn</h3>
          <p>Total biomass</p>
        </div>
        <div className="imagen-text-item">
          <h3>7,578.36 tn</h3>
          <p>Avg. biomass per quadrant</p>
        </div>
        <a className="link-imagen" href="">
          <img src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
          <p>What is biomass?</p>
        </a>
      </div>

      <style jsx>
        {`
          .imagen-feature {
            img {
              display: block;
              max-width: 100%;
              height: auto;
            }
            .imagen-info {
              width: 324px;
              padding: 20px;
              padding-bottom: 28px;
              box-sizing: border-box;
              height: 283px;
              border-radius: 6px;
              box-shadow: 0 2px 40px 0 rgba(38, 43, 65, 0.39);
              background-color: #ffffff;
              @media screen and (max-width: 640px) {
                width: 100%;
                text-align: center;
              }
              @media screen and (max-width: 480px) {
                height: auto;
              }
            }
          }

          .info-figure {
            @media screen and (max-width: 640px) {
              max-width: 285px;
              margin: auto;
            }
          }
          .imagen-numbers {
            display: flex;
            flex-flow: row wrap;
            margin-bottom: 20px;
          }
          .numbers-item {
            width: 33.33%;
            font-size: 12px;
            color: #969db6;
            &:nth-child(2) {
              text-align: center;
            }
            &:last-child {
              text-align: right;
            }
          }
          .imagen-text-item {
            margin-bottom: 14px;
            h3,
            p {
              margin: 0;
            }
            h3 {
              margin: 0;
              font-size: 22px;
              font-weight: normal;
            }
            p {
              font-size: 14px;
              color: #969db6;
            }
            @media screen and (max-width: 480px) {
              text-align: left;
            }
          }
          .info-title {
            font-family: 'Work Sans', sans-serif;
            font-weight: 700;
            font-size: 16px;
            margin: 0;
            margin-bottom: 20px;
          }
          .imagen-feature {
            background-color: #969db6;
            justify-content: space-between;
          }
          .imagen-feature.content {
            padding: 65px 56px;
            margin-top: 60px;
            @media screen and (max-width: 480px) {
              padding: 55px 25px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default ImagenFeature;
