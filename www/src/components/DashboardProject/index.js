import React, { useState } from 'react';
import DetailHead from './DetailHead';
import StatusMonitoring from './StatusMonitoring';
import Graphics from './Graphics';
import Benefits from './Benefits';
import {
  DetailMain,
  WrapHeadTab,
  DetailAside,
  AsideContentTab,
  AsideHeadTab,
  DetailWrapMap,
  AsideItemTab,
} from './style';
function DashboardProject() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="detail-project">
      <DetailHead />
      <DetailMain>
        <DetailAside>
          <WrapHeadTab>
            <AsideHeadTab>
              <button className={activeTab === 0 && 'active'} onClick={() => setActiveTab(0)}>
                Insights
              </button>
              <button className={activeTab === 1 && 'active'} onClick={() => setActiveTab(1)}>
                Project information
              </button>
            </AsideHeadTab>
          </WrapHeadTab>
          <AsideContentTab>
            <div className={`aside-item-tab ${activeTab === 0 && 'active'}`}>
              <StatusMonitoring />
              <Graphics />
              <Benefits />
              {/*


              <Events />
              <ProjectPictures /> */}
            </div>
            <AsideItemTab className={activeTab === 1 && 'active'}>
              <div className="spaces">
                {/* <InfoResumen />
                <InfoDescription />
                <InfoList />
                <InfoLogo /> */}
              </div>
            </AsideItemTab>
          </AsideContentTab>
        </DetailAside>
        <DetailWrapMap>{/* <MapDetail /> */}</DetailWrapMap>
      </DetailMain>
    </div>
  );
}

export default DashboardProject;
