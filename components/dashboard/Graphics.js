import React, { useState } from 'react';
function Graphics() {
  const [showInLightbox, setInLightbox] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(0);

  return (
    <div className="wrap-graphics ">
      <h3 className="aside-title">Carbon Capture</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <span className="graphic-open-lightbox" onClick={() => (setInLightbox(0), setOpenLightbox(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </span>

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-1.png" alt="" />
          </figure>
        </div>
      </div>
      <h3 className="aside-title">Tree Cover</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>40.3%</span>
              <p>current cover</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <span className="graphic-open-lightbox" onClick={() => (setInLightbox(1), setOpenLightbox(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </span>

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-2.png" alt="" />
          </figure>
        </div>
      </div>

      <h3 className="aside-title">BIOMASS</h3>
      <div className="spaces">
        <div className="detail-graphic">
          <div className="wrap-graphic-info flex">
            <div className="graphic-number graphic-info-item">
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </div>
            <div className="graphic-date graphic-info-item">
              <span>12/07/19</span>

              <span className="graphic-open-lightbox" onClick={() => (setInLightbox(2), setOpenLightbox(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </span>

              <p>Last verification</p>
            </div>
          </div>
          <figure>
            <img src="/static/assets/images/graphic-n-3.png" alt="" />
          </figure>
        </div>
      </div>
      <div className={`wrap-lightbox-graphic ${openLightbox === 1 && 'active'}`}>
        <div className="lightbox-overlay" onClick={() => setOpenLightbox(0)} />
        <div className="lightbox-main-graphic">
          <span className="ligthbox-close" onClick={() => setOpenLightbox(0)}>
            <img src="/static/iconos/close-2.png" width="20" alt="" />
          </span>
          <figure className="sheets sheet-1">
            <img src="/static/assets/images/big-sheet.svg" alt="" />
          </figure>
          <div className="lightbox-items">
            <div className={`lightbox-item-graphic ${showInLightbox === 0 && 'active'}`}>
              <h3 className="lightbox-title">CARBON CAPTURE</h3>
              <div className="lightbox-description">
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </div>
            </div>
            <div className={`lightbox-item-graphic ${showInLightbox === 1 && 'active'}`}>
              <h3 className="lightbox-title">TREE COVER</h3>
              <div className="lightbox-description">
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </div>
            </div>
            <div className={`lightbox-item-graphic ${showInLightbox === 2 && 'active'}`}>
              <h3 className="lightbox-title">BIOMASS</h3>
              <div className="lightbox-description">
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </div>
            </div>
          </div>

          <figure className="sheets sheet-2">
            <img src="/static/assets/images/small-sheet.svg" alt="" />
          </figure>
        </div>
      </div>

      <style jsx>
        {`
          .graphic-title {
            font-size: 12px;
            font-weight: 500;
            color: #000;
            margin-bottom: 15px;
            text-transform: uppercase;
            display: flex;
            span {
              display: inline-block;
              vertical-align: middle;
              width: 13px;
              height: 13px;
              border: solid 1px #979797;
              background-color: #d8d8d8;
              border-radius: 100%;
              margin-left: 5px;
            }
          }
          .wrap-graphic-info {
            align-items: flex-end;
            padding: 13px 16px;
            padding-bottom: 25px;
          }
          .graphic-info-item {
            width: 50%;
            p {
              margin: 0;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              text-transform: uppercase;
            }
            &:last-child {
              text-align: right;
            }
          }
          .graphic-number {
            span {
              font-family: 'Work Sans', sans-serif;
              font-weight: 400;
              font-size: 32px;
            }
          }
          .graphic-date {
            span {
              font-size: 20px;
              font-family: 'Work Sans', sans-serif;
              font-weight: 500;
              margin-right: 5px;
            }
          }
          .detail-graphic {
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
            background-color: #ffffff;
            figure {
              img {
                max-width: 100%;
                height: auto;
                display: block;
              }
            }
          }
          .graphic-open-lightbox {
            margin: 0;
            padding: 05px;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-block;
            &:hover {
              transform: scale(1.2);
            }
          }
          .wrap-lightbox-graphic {
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            z-index: 1200;
            height: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s;
            &.active {
              height: 100vh;
              opacity: 1;
              visibility: visible;
            }
            .lightbox-overlay {
              background-color: rgba(0, 0, 0, 0.5);
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            }
            .lightbox-main-graphic {
              position: relative;
              z-index: 2;
              background-color: #fff;
              max-width: 490px;
              min-height: 325px;
              margin: 0 auto;
              border-radius: 10px;
              border: solid 1px #979797;
              padding: 100px 40px;
              padding-bottom: 90px;
              box-sizing: border-box;
            }
            .sheets {
              position: absolute;
              z-index: 3;
            }
            .sheet-1 {
              top: -70px;
              left: 0;
            }
            .sheet-2 {
              bottom: -30px;
              right: 5px;
            }
            .ligthbox-close {
              position: absolute;
              top: 25px;
              right: 25px;
              cursor: pointer;
            }
            .lightbox-items {
              position: relative;
            }
            .lightbox-item-graphic {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              visibility: hidden;
              opacity: 0;
              transition: all 0.3s;
              &.active {
                opacity: 1;
                visibility: visible;
                position: relative;
              }
            }
            .lightbox-title {
              font-size: 16px;
              color: #000;
              font-family: 'Work Sans', sans-serif;
              font-weight: 500;
              margin: 0;
              margin-bottom: 14px;
            }
            .lightbox-description {
              font-weight: 300;
              font-size: 14px;
              color: #000;
              p {
                margin-top: 0;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default Graphics;
