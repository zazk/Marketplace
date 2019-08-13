import React from 'react';
import PropTypes from 'prop-types';

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
function ProjectItem({ project, customClass }) {
  return (
    <Project to="#" className={customClass}>
      <ProjectPicture picture={project.main_picture} />
      <ProjectDetail>
        <ProjectResumen>
          <ProjecprojectName>{project.title}</ProjecprojectName>
          <ProjectUbication>
            <ProjectUbicationAddress>{project.location.name}</ProjectUbicationAddress>
          </ProjectUbication>
          <div className="project-progress">
            <ProgressBar>
              <ProgressbarItem style={{ width: `80%` }} />
            </ProgressBar>
            <ProgresNumbers>
              <p>
                <strong>{project.credits_avail.quatinty}</strong>
                carbon credits available
              </p>
            </ProgresNumbers>
          </div>
        </ProjectResumen>
        <ProjectDescription>
          <DescriptionItem>
            <img src="/static/iconos/icon-sumary-1.svg" width="24" alt="" />
            <div className="description-text">
              <span>{project.total_land.area + ' ' + project.total_land.unit}</span>
              <p>Total Area</p>
            </div>
          </DescriptionItem>
          <DescriptionItem>
            <img src="/static/iconos/icon-sumary-3.svg" width="24" alt="" />
            <div className="description-text">
              <span>{project.project_type} </span>
              <p>Project Type</p>
            </div>
          </DescriptionItem>
        </ProjectDescription>
      </ProjectDetail>
    </Project>
  );
}
ProjectItem.propTypes = {
  project: PropTypes.shape({
    main_picture: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    credits_avail: PropTypes.shape({
      quatinty: PropTypes.string,
    }),
    total_land: PropTypes.shape({
      area: PropTypes.string,
      unit: PropTypes.string,
    }),
    project_type: PropTypes.string,
  }),
};
export default ProjectItem;
