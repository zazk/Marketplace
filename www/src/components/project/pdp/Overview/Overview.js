import React from 'react';
import ItemList from '../ItemList';
import Gallery from '../../../features/Gallery';
import {
  OverviewContent,
  TabItem,
  TabContent,
  TabTitle,
  TabDescription,
  FeatureList,
  FeatureItem,
  TabContentGallery,
} from './style';
function Overview({ project, locationName, locationAddres1, locationAddres2 }) {
  return (
    <OverviewContent>
      <div className="content-main">
        <TabItem>
          <TabContent>
            <TabTitle>
              <img src="/static/iconos/icon-eye.svg" width="20" alt="" />
              Overview
            </TabTitle>
            <TabDescription>{project.project_overview}</TabDescription>
            <FeatureList>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-1.svg"
                  title={locationName}
                  description={locationAddres1 + ', ' + locationAddres2}
                />
              </FeatureItem>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-2.svg"
                  title={project.project_developer}
                  description="Project developer"
                />
              </FeatureItem>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-3.svg"
                  title={project.total_land.area + ' ' + project.total_land.unit}
                  description=""
                />
              </FeatureItem>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-4.svg"
                  title={project.auditor}
                  description="Project auditor"
                />
              </FeatureItem>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-5.svg"
                  title={project.verification.methodology}
                  description={project.verification.last_verification}
                />
              </FeatureItem>
              <FeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-6.svg"
                  title={project.land_owner}
                  description="Land owner"
                />
              </FeatureItem>
            </FeatureList>
          </TabContent>
          <TabContentGallery>
            <Gallery data={project.project_images} />
          </TabContentGallery>
        </TabItem>
      </div>
    </OverviewContent>
  );
}
export default Overview;
