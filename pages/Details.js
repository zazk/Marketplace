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

                <div className="benefits-item">
                  <div className="benefits-text">
                    <h4 className="benefits-title">Biodiversity</h4>
                    <p>
                      10 new species were planted since the last verification. The developer plans on having planted 35
                      different species by the end of this project.
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

                <h3 className="aside-title">upcoming events</h3>
                <div className="events-item">
                  <div className="event-title">
                    <span />
                    <h3>
                      Tree planting
                      <span className="event-date" />
                    </h3>
                  </div>
                  <div className="event-wrap-tags">
                    <span className="event-tag">biomass ++</span>
                    <span className="event-tag">biodiversity ++</span>
                  </div>
                </div>

                <h3 className="aside-title">Modulo de fotitos georeferenciadas</h3>
                <div className="detail-wrap-modulos">
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
                <select name="" id="">
                  <option value="">Biomass</option>
                </select>
              </div>
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="legend-numbers">
                <div className="legend-number-item">0</div>
                <div className="legend-number-item">...</div>
                <div className="legend-number-item">10.000</div>
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
              width: 32%;
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
              .volver-detail {
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
                border-bottom: 1px solid #979797;
              }
              .benefits-item {
                position: relative;
                padding-right: 140px;
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
              }
              .benefits-title {
                font-size: 16px;
                font-weight: 500;
                color: #000;
                margin: 0;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
export default Details;
