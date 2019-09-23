import React from 'react';
import { ProjectUbication, TitleUbication, WrapInfoItem, ProjectInfoItem } from './style';
function InfoResumen() {
  return (
    <div className="wrap-info-resumen">
      <ProjectUbication>
        <p>Forest / North America</p>
        <TitleUbication>Middlebury College Improved Forest Management Project</TitleUbication>
      </ProjectUbication>

      <WrapInfoItem>
        <ProjectInfoItem>
          <span>11,578 tn</span>
          <p>Emissions compesated</p>
        </ProjectInfoItem>
        <ProjectInfoItem>
          <span>$23,568.54</span>
          <p>Total investment</p>
        </ProjectInfoItem>
        <ProjectInfoItem>
          <span>$7.56</span>
          <p>Average price per credit</p>
        </ProjectInfoItem>
      </WrapInfoItem>
    </div>
  );
}
export default InfoResumen;
