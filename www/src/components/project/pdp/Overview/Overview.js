import React from 'react';
import ItemList from '../ItemList';
import Gallery from '../../../features/Gallery';
import {
  TabFeatures,
  TabFeatureItem,
  TabContentImages,
  TabContent,
  TabContentDescripcion,
  TabItem,
  TabDescripcion,
  TabTitle,
} from './style';
function Overview({ project, locationName, locationAddres1, locationAddres2 }) {
  return (
    <TabContent>
      <div className="content-main">
        <TabItem>
          <TabContentDescripcion>
            <TabTitle>
              <img src="/static/iconos/icon-eye.svg" width="20" alt="" />
              Overview
            </TabTitle>
            <TabDescripcion>{project.project_overview}</TabDescripcion>
            <TabFeatures>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-1.svg"
                  title={locationName}
                  description={locationAddres1 + ', ' + locationAddres2}
                />
              </TabFeatureItem>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-2.svg"
                  title={project.project_developer}
                  description="Project developer"
                />
              </TabFeatureItem>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-3.svg"
                  title={project.total_land.area + ' ' + project.total_land.unit}
                  description=""
                />
              </TabFeatureItem>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-4.svg"
                  title={project.auditor}
                  description="Project auditor"
                />
              </TabFeatureItem>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-5.svg"
                  title={project.verification.methodology}
                  description={project.verification.last_verification}
                />
              </TabFeatureItem>
              <TabFeatureItem>
                <ItemList
                  icono="/static/iconos/icon-sumary-6.svg"
                  title={project.land_owner}
                  description="Land owner"
                />
              </TabFeatureItem>
            </TabFeatures>
          </TabContentDescripcion>
          <TabContentImages>
            <Gallery data={project.project_images} />
          </TabContentImages>
        </TabItem>
      </div>
    </TabContent>
  );
}
export default Overview;
