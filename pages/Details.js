import React from 'react';
import Layout from '../components/layout';
function Details() {
  return (
    <Layout title="Dashboard" dashboard={true}>
      <div className="detail-project">
        <div className="detail-header flex">
          <div className="head-left flex">
            <button className="volver-detail">
              <img src="/static/iconos/arrow-head.svg" width="14" height="28" alt="" />
            </button>
            <figure className="detail-logo-project">
              <img src="https://via.placeholder.com/90x28" width="90" alt="" />
            </figure>
            <h2 className="head-name-project">Boulder Creek National Reserve</h2>
          </div>
          <div className="head-right flex">
            <button className="detail-menu">
              <span>...</span>
            </button>
            <button className="detail-btn btn">REQUEST</button>
          </div>
        </div>
        <div className="detail-main flex">
          <div className="detail-aside">
            <div className="aside-head-tab flex">
              <button className="active" type="button">
                Insights
              </button>
              <button type="button">Project information</button>
            </div>
            <div className="aside-content-tab">
              <div className="aside-item-tab">
                <h3 className="aside-title">Status monitoring</h3>
                <div className="status-circles flex">
                  <div className="status-item">
                    <img src="https://via.placeholder.com/48x48" width="48" alt="" />
                    <span className="status-color" style={{ backgroundColor: `#5fb000` }} />
                  </div>

                  <div className="status-item">
                    <img src="https://via.placeholder.com/48x48" width="48" alt="" />
                    <span className="status-color" style={{ backgroundColor: `#5fb000` }} />
                  </div>

                  <div className="status-item">
                    <img src="https://via.placeholder.com/48x48" width="48" alt="" />
                    <span className="status-color" style={{ backgroundColor: `#f4ba00` }} />
                  </div>

                  <div className="status-item">
                    <img src="https://via.placeholder.com/48x48" width="48" alt="" />
                    <span className="status-color" style={{ backgroundColor: `#dc1700` }} />
                  </div>
                </div>
                <div className="wrap-status-text">
                  <div className="status-text-item">
                    <p>Weather alert: forecast suggests very low humidity levels</p>
                  </div>

                  <div className="status-text-item">
                    <p>Plant health: there’s a very bad pest coming to eat every living spicies on this land</p>
                  </div>
                </div>

                <div class="wrap-graphics">
                  <div className="detail-graphic">
                    <h3 className="graphic-title">
                      Carbon capture
                      <span />
                    </h3>
                    <figure>
                      <img src="/static/assets/images/graphic-1.png" alt="" />
                    </figure>
                    <div className="wrap-graphic-info flex">
                      <div className="graphic-number graphic-info-item">
                        <span>13,467.67</span>
                        <p>current cap (Tn co2)</p>
                      </div>
                      <div className="graphic-date graphic-info-item">
                        <span>12/07/19</span>

                        <img src="/static/iconos/icon-info.png" alt="" />

                        <p>Last verification</p>
                      </div>
                    </div>
                  </div>
                  <div className="detail-graphic">
                    <h3 className="graphic-title">
                      Tree cover
                      <span />
                    </h3>
                    <figure>
                      <img src="/static/assets/images/graphic-2.png" alt="" />
                    </figure>
                    <div className="wrap-graphic-info flex">
                      <div className="graphic-number graphic-info-item">
                        <span>40.3%</span>
                        <p>current cover</p>
                      </div>
                      <div className="graphic-date graphic-info-item">
                        <span>12/07/19</span>

                        <img src="/static/iconos/icon-info.png" alt="" />

                        <p>Last verification</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="aside-title">Co-benefits generation</h3>
                <div className="wrap-benefits">
                  <div className="benefits-item">
                    <div className="benefits-text">
                      <h4 className="benefits-title">Biodiversity</h4>
                      <p>
                        10 new species were planted since the last verification. The developer plans on having planted
                        35 different species by the end of this project.
                      </p>
                    </div>
                    <div className="benefits-numbers">
                      <span>24</span>
                      <em>(10&#x2191;)</em>
                    </div>
                  </div>

                  <div className="benefits-item">
                    <div className="benefits-text">
                      <h4 className="benefits-title">Hiring</h4>
                      <p>
                        25 new jobs were generated since the last verification, including logistics, maintenance and
                        management roles.
                      </p>
                    </div>
                    <div className="benefits-numbers">
                      <span>123</span>
                      <em>(25&#x2191;)</em>
                    </div>
                  </div>

                  <div className="benefits-item">
                    <div className="benefits-text">
                      <h4 className="benefits-title">Water wells</h4>
                      <p>No new water wells have been built lately.</p>
                    </div>
                    <div className="benefits-numbers">
                      <span>6</span>
                    </div>
                  </div>

                  <div className="benefits-item">
                    <div className="benefits-text">
                      <h4 className="benefits-title">Monthly income</h4>
                      <p>Material sales resulting from controlled trimming have fluctuated positively.</p>
                    </div>
                    <div className="benefits-numbers">
                      <span>$100k</span>
                      <em>(&#x2191;3%)</em>
                    </div>
                  </div>
                </div>

                <h3 className="aside-title">upcoming events</h3>
                <div className="events-item">
                  <h3 className="event-title">
                    <span className="event-circle" />
                    Tree planting
                    <span className="event-date">In 15 days</span>
                  </h3>
                  <div className="event-wrap-tags">
                    <span className="event-tag">biomass ++</span>
                    <span className="event-tag">biodiversity ++</span>
                  </div>
                </div>
                <div className="events-item">
                  <h3 className="event-title">
                    <span className="event-circle" />
                    Tree planting
                    <span className="event-date">In 15 days</span>
                  </h3>
                  <div className="event-wrap-tags">
                    <span className="event-tag">biomass ++</span>
                    <span className="event-tag">biodiversity ++</span>
                  </div>
                </div>

                <h3 className="aside-title modulos">Modulo de fotitos georeferenciadas</h3>
                <div className="detail-wrap-modulos flex">
                  <div className="modulo-item" />
                  <div className="modulo-item" />
                  <div className="modulo-item" />
                  <div className="modulo-item" />
                  <div className="modulo-item" />
                  <div className="modulo-item" />
                </div>
              </div>
            </div>
          </div>
          <div className="detail-wrap-map">
            <div className="detail-legend">
              <div className="legend-select">
                <img className="legend-select-icon" src="/static/iconos/arrow-select.png" width="15" alt="" />
                <select name="" id="">
                  <option value="">Biomass</option>
                  <option value="">Biomass 1</option>
                  <option value="">Biomass 2</option>
                  <option value="">Biomass 3</option>
                </select>
              </div>
              <figure>
                <img src="/static/assets/images/bar-biomas.png" width="496" alt="" />
              </figure>
              <div className="imagen-legend">
                <div className="numbers-legend">0</div>
                <div className="numbers-legend">...</div>
                <div className="numbers-legend">10000</div>
              </div>
            </div>

            <div className="detail-map">
              <figure>
                <img src="https://via.placeholder.com/821x742" width="821" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <style jsx global>
          {`
            button {
              border: none;
              background: none;
              padding: 0;
            }
            .detail-project {
              max-width: 1280px;
              margin: auto;

              color: #363636;
            }
            .detail-main {
              justify-content: space-between;
            }
            .detail-aside {
              width: 34%;
              padding-right: 20px;
              box-sizing: border-box;
              height: calc(100vh - 58px);
              overflow: auto;
            }
            .detail-wrap-map {
              width: 64%;
            }
            .detail-header {
              justify-content: space-between;
              align-items: center;
              padding: 0 15px;
              height: 58px;
              border-bottom: 1px solid rgba(151, 151, 151, 0.3);
              box-sizing: border-box;
              .detail-logo-project {
                margin-left: 18px;
              }
              .detail-menu {
                text-align: center;
                position: relative;
                width: 30px;
                span {
                  margin-top: 5px;
                  font-size: 30px;
                  font-weight: 700;
                  position: absolute;
                  top: -10px;
                  left: 0;
                }
              }
              .btn {
                width: 133px;
                height: 39px;
                font-size: 14px;
                margin-left: 25px;
              }
              .head-name-project {
                margin: 0;
                font-size: 16px;
                line-height: 33px;
                font-weight: 50;
                margin-left: 13px;
              }
            }
            .detail-aside {
              padding-top: 25px;
              .aside-title {
                margin: 0;
                font-weight: 50;
                font-size: 12px;
                color: #000;
                text-transform: uppercase;
                margin-bottom: 15px;
                font-weight: 500;
                &.modulos {
                  margin-top: 40px;
                }
              }
              .aside-head-tab {
                border: 1px solid #979797;
                margin-bottom: 15px;
                button {
                  cursor: pointer;
                  width: 50%;
                  height: 36px;
                  &:last-child {
                    border-left: 1px solid #979797;
                  }
                  &:hover,
                  &.active {
                    background-color: #d8d8d8;
                  }
                }
              }
              .status-circles {
                justify-content: center;
                margin-bottom: 20px;
              }
              .status-item {
                position: relative;
                width: 48px;
                margin: 0 20px;
                img {
                  border-radius: 100%;
                }
                .status-color {
                  width: 14px;
                  height: 14px;
                  border-radius: 100%;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  display: block;
                }
              }
              .status-text-item {
                font-size: 14px;
                color: #000;
                padding: 10px;
                background-color: #d8d8d8;
                border: 1px solid #979797;
                margin-bottom: 6px;
                &:last-child {
                  margin-bottom: 0;
                }
                p {
                  margin: 0;
                }
              }
              .wrap-status-text {
                margin-bottom: 20px;
              }

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
              }
              .graphic-info-item {
                width: 50%;
                p {
                  margin: 0;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  text-transform: uppercase;
                }
              }
              .graphic-number {
                span {
                  font-size: 32px;
                }
              }
              .graphic-date {
                span {
                  font-size: 20px;
                  font-weight: 500;
                  margin-right: 5px;
                }
              }
              .detail-graphic {
                padding-bottom: 20px;
                margin-bottom: 15px;
                border-bottom: 1px solid #302424;
              }
              .wrap-benefits {
                border-bottom: 1px solid #979797;
                margin-bottom: 15px;
              }
              .benefits-item {
                position: relative;
                padding-right: 140px;
                padding-bottom: 22px;
                margin-bottom: 15px;
                border-bottom: 1px solid rgba(151, 151, 151, 0.34);
                &:last-child {
                  border-bottom: none;
                  margin-bottom: 0;
                }
              }
              .benefits-numbers {
                position: absolute;
                right: 0;
                top: 0;
                span {
                  font-size: 32px;
                  margin-right: 5px;
                }
                em {
                  font-style: normal;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                }
              }
              .benefits-text {
                font-size: 14px;
                color: #000;
                p {
                  margin: 0;
                }
              }
              .benefits-title {
                font-size: 16px;
                font-weight: 500;
                color: #000;
                margin: 0;
              }
              .event-title {
                display: flex;
                font-size: 16px;
                columns: #000000;
                font-weight: 500;
                position: relative;
                padding-right: 80px;
                margin: 0;
                line-height: 100%;
                .event-date {
                  position: absolute;
                  top: 0;
                  right: 0;
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                }

                .event-circle {
                  width: 20px;
                  height: 20px;
                  border-radius: 100%;
                  display: inline-block;
                  background-color: #d8d8d8;
                  margin-right: 10px;
                }
              }
              .event-wrap-tags {
                padding-left: 30px;
                padding-bottom: 15px;
              }
              .events-item {
                padding: 20px 0;
                border-bottom: 1px solid rgba(151, 151, 151, 0.34);
              }
              .event-tag {
                display: inline-block;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
                background-color: #fff;
                border-radius: 10px;
                padding: 2px 7px;
                background-color: #d8d8d8;
                text-transform: uppercase;
                margin-right: 10px;
              }

              .modulo-item {
                width: 25%;
                margin-left: 5%;
                margin-bottom: 5%;
                height: 104px;
                box-sizing: border-box;
                background-color: #d8d8d8;
                border: 1px solid #979797;
                &:nth-child(3n + 1) {
                  margin-left: 0;
                }
                &:first-child {
                  margin-left: 0;
                }
              }
            }
            .detail-wrap-map {
              position: relative;
            }
            .detail-legend {
              width: 270px;
              padding: 15px;
              box-sizing: border-box;
              position: absolute;
              top: 13px;
              left: 18px;
              z-index: 1;
              background-color: #fff;
            }
            .imagen-legend {
              display: flex;
              flex-flow: row wrap;
            }
            .numbers-legend {
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
            .legend-select-icon {
              position: absolute;
              top: 9px;
              right: 5px;
            }

            .legend-select {
              border: 1px solid #302424;
              display: inline-block;
              position: relative;
              margin-bottom: 10px;
              select {
                text-transform: uppercase;
                color: #000;
                font-size: 12px;
                background: none;
                border: none;
                width: 100%;
                font-weight: 500;
                height: 25px;
                padding: 0 10px;
                padding-right: 30px;
                appearance: none;
                &::-ms-expand {
                  display: none;
                }
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
export default Details;
