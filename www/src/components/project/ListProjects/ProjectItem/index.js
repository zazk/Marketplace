import React from 'react';
import {
  ProgressBar,
  ProgressbarItem,
  ProgresNumbers,
  Project,
  ProjectPicture,
  ProjectResumen,
  ProjectDescription,
  ProjectUbicationAddress,
  ProjecprojectName,
  ProjectUbication,
  DescriptionItem,
  ProjectDetail,
} from './style';
function ProjectItem({ image, name, ubication, customClass, credits, totalarea, totalunit, proyectType }) {
  return (
    <Project to="#" className={customClass}>
      <ProjectPicture picture={image} />
      <ProjectDetail>
        <ProjectResumen>
          <ProjecprojectName>{name}</ProjecprojectName>
          <ProjectUbication>
            <ProjectUbicationAddress>{ubication}</ProjectUbicationAddress>
          </ProjectUbication>
          <div className="project-progress">
            <ProgressBar>
              <ProgressbarItem style={{ width: `80%` }} />
            </ProgressBar>
            <ProgresNumbers>
              <p>
                <strong>{credits}</strong>
                carbon credits available
              </p>
            </ProgresNumbers>
          </div>
        </ProjectResumen>
        <ProjectDescription>
          <DescriptionItem>
            <img src="/static/iconos/icon-sumary-1.svg" width="24" alt="" />
            <div className="description-text">
              <span>{totalarea + ' ' + totalunit}</span>
              <p>Total Area</p>
            </div>
          </DescriptionItem>
          <DescriptionItem>
            <img src="/static/iconos/icon-sumary-3.svg" width="24" alt="" />
            <div className="description-text">
              <span>{proyectType} </span>
              <p>Project Type</p>
            </div>
          </DescriptionItem>
        </ProjectDescription>
      </ProjectDetail>
    </Project>
  );
}

export default ProjectItem;
