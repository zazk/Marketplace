import React, { useState } from 'react';
import Layout from '../components/layout';
import DetailHead from '../components/dashboard/DetailHead';
import StatusMonitoring from '../components/dashboard/StatusMonitoring';
import Graphics from '../components/dashboard/Graphics';
import Benefits from '../components/dashboard/Benefits';
import Events from '../components/dashboard/Events';
import Georeferenciadas from '../components/dashboard/Georeferenciadas';
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
            <div className="aside-head-tab flex">
              <button className={activeTab === 0 && 'active'} onClick={() => setActiveTab(0)}>
                Insights
              </button>
              <button className={activeTab === 1 && 'active'} onClick={() => setActiveTab(1)}>
                Project information
              </button>
            </div>
            <div className="aside-content-tab">
              <div className={`aside-item-tab ${activeTab === 0 && 'active'}`}>
                <StatusMonitoring />
                <Graphics />
                <Benefits />
                <Events />
                <Georeferenciadas />
              </div>
              <div className={`aside-item-tab ${activeTab === 1 && 'active'}`}>
                <InfoResumen />
                <InfoDescription />
                <InfoList />
                <InfoLogo />
              </div>
            </div>
          </div>
          <div className="detail-wrap-map">
            <MapDetail />
          </div>
        </div>
        <style jsx global>
          {`
            .detail-project {
              color: #363636;
            }
            .detail-main {
              justify-content: space-between;
            }
            .detail-aside {
              width: 420px;
              padding-left: 20px;
              padding-right: 20px;
              box-sizing: border-box;
              height: calc(100vh - 58px);
              overflow: auto;
              box-sizing: border-box;
            }
            .detail-wrap-map {
              width: calc(100vw - 420px);
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
          `}
        </style>
      </div>
    </Layout>
  );
}
export default Details;
