import React, { useState } from 'react';
import Layout from '../components/layout';
import DetailHead from '../components/dashboard/DetailHead';
import StatusMonitoring from '../components/dashboard/StatusMonitoring';
import Graphics from '../components/dashboard/Graphics';
import Benefits from '../components/dashboard/Benefits';
import Events from '../components/dashboard/Events';
import ProjectPictures from '../components/dashboard/ProjectPictures';
import MapDetail from '../components/dashboard/MapDetail';
import InfoResumen from '../components/dashboard/InfoResumen';
import InfoDescription from '../components/dashboard/InfoDescription';
import InfoList from '../components/dashboard/InfoList';
import InfoLogo from '../components/dashboard/InfoLogo';
function Details() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Layout title="Dashboard" dashboard={true}>
      <div className="detail-project">
        <DetailHead />
        <div className="detail-main flex">
          <div className="detail-aside">
            <div className="spaces wrap-head-tab">
              <div className="aside-head-tab flex">
                <button className={activeTab === 0 && 'active'} onClick={() => setActiveTab(0)}>
                  Insights
                </button>
                <button className={activeTab === 1 && 'active'} onClick={() => setActiveTab(1)}>
                  Project information
                </button>
              </div>
            </div>
            <div className="aside-content-tab">
              <div className={`aside-item-tab ${activeTab === 0 && 'active'}`}>
                <StatusMonitoring />
                <Graphics />
                <Benefits />
                <Events />
                <ProjectPictures />
              </div>
              <div className={`aside-item-tab ${activeTab === 1 && 'active'}`}>
                <div className="spaces">
                  <InfoResumen />
                  <InfoDescription />
                  <InfoList />
                  <InfoLogo />
                </div>
              </div>
            </div>
          </div>
          <div className="detail-wrap-map">
            <MapDetail />
          </div>
        </div>
        <style jsx global>
          {`
            .spaces {
              padding-left: 20px;
              padding-right: 20px;
            }
            .detail-project {
              color: #363636;
            }
            .detail-main {
              justify-content: space-between;
            }
            .detail-aside {
              width: 430px;
              box-sizing: border-box;
              height: calc(100vh - 70px);
              overflow: auto;
              box-sizing: border-box;
              box-shadow: 2px 0 5px 0 rgba(65, 130, 142, 0.19);
              background-color: #fafafa;
            }
            .detail-wrap-map {
              width: calc(100vw - 430px);
            }

            .detail-aside {
              padding-top: 90px;
              .aside-title {
                margin: 0;
                font-weight: 700;
                font-size: 12px;
                font-family: 'Work Sans', sans-serif;
                color: rgba(54, 54, 54, 0.8);
                text-transform: uppercase;
                margin-bottom: 13px;
                padding-left: 20px;
                padding-right: 20px;
                &.modulos {
                  margin-top: 40px;
                }
              }
              .wrap-head-tab {
                padding-top: 15px;
                padding-bottom: 15px;
                position: fixed;
                left: 0;
                width: 420px;
                box-sizing: border-box;
                top: 67px;
                background-color: #fafafa;
                z-index: 10;
              }
              .aside-head-tab {
                background-color: rgba(65, 130, 142, 0.1);
                border-radius: 20px;
                justify-content: space-between;
                button {
                  cursor: pointer;
                  width: 49%;
                  height: 45px;
                  border-radius: 20px 20px 0px 20px;
                  font-weight: 700;
                  color: #c1c5d0;
                  font-size: 16px;
                  line-height: 24px;
                  &:hover,
                  &.active {
                    color: #41828e;
                    background-color: #fff;
                    box-shadow: 0 5px 20px 0 rgba(7, 93, 108, 0.16);
                  }
                }
              }
              .aside-content-tab {
                position: relative;
              }
              .aside-item-tab {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                visibility: hidden;
                opacity: 0;
                transition: opacity 0.5s;
                padding-bottom: 30px;
                height: 0;
                overflow: hidden;
                &.active {
                  opacity: 1;
                  height: 100%;
                  visibility: visible;
                  position: relative;
                }
              }
            }
            .detail-wrap-map {
              position: relative;
            }
            .wrap-drodown {
              position: relative;
              &:hover {
                .dropdown {
                  opacity: 1;
                  visibility: visible;
                  transform: translateY(0px);
                }
              }
              &[data-position='right'] {
                .dropdown {
                  left: inherit;
                  right: 0;
                  .dropdown-main {
                    &:after {
                      left: inherit;
                      right: 20px;
                    }
                    &:before {
                      left: inherit;
                      right: 20px;
                    }
                  }
                }
              }
              .dropdown {
                opacity: 0;
                transform: translateY(-5px);
                visibility: hidden;
                transition: all 0.5s;
                position: absolute;
                width: 200px;
                left: 0;
                top: 100%;
                padding-top: 10px;
                z-index: 10;
                .dropdown-main {
                  box-sizing: border-box;
                  background-color: #fff;
                  border-radius: 10px;
                  overflow: hidden;
                  border: 1px solid #b3afaf;
                  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
                  &:after,
                  &:before {
                    content: '';
                    position: absolute;
                  }
                  &:after {
                    left: 20px;
                    width: 0;
                    z-index: 1;
                    top: 3px;
                    height: 0;
                    border-style: solid;
                    border-width: 0 8px 8px 7.5px;
                    border-color: transparent transparent #b3afaf transparent;
                  }
                  &:before {
                    z-index: 2;
                    left: 21px;
                    top: 5px;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 7px 6px 7px;
                    border-color: transparent transparent #fff transparent;
                  }
                }
              }
              .dropdown-item {
                border-bottom: 1px solid #ccc;
                &:last-child {
                  border-bottom: none;
                }
              }
              .dropdown-link {
                height: 40px;
                display: flex;
                padding: 0 10px;
                align-items: center;
                &:hover {
                  background-color: #eee;
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