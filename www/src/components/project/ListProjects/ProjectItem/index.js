import React from 'react';
import PropTypes from 'prop-types';
import ProjectProgressBar from '../../../ProjectProgressBar';
import ProjectOffsetHistory from '../../../ProjectOffsetHistory';
import {
  Project,
  ProjectPicture,
  ProjectResumen,
  ProjectDescription,
  ProjectUbicationAddress,
  ProjectName,
  ProjectUbication,
  DescriptionItem,
  ProjectDetail,
  HistoryProjects,
} from './style';
function ProjectItem({ project, customClass }) {
  console.log('customClass', customClass);
  return (
    <Project to="#" className={customClass}>
      <ProjectPicture picture={project.main_picture} />
      <ProjectDetail>
        <ProjectResumen>
          <ProjectName>{project.title}</ProjectName>
          <ProjectUbication>
            <ProjectUbicationAddress>{project.location.name}</ProjectUbicationAddress>
          </ProjectUbication>
          {customClass === 'projects-user' || customClass === 'projects-backed' ? (
            ''
          ) : (
            <ProjectProgressBar data={project} type={customClass}></ProjectProgressBar>
          )}
        </ProjectResumen>
        <ProjectDescription>
          {customClass === 'projects-user' ? (
            <>
              <DescriptionItem>
                <img src="/static/iconos/icon-sumary-1.svg" width="24" alt="" />
                <div className="description-text">
                  <span>20 tonnes </span>
                </div>
              </DescriptionItem>
              <DescriptionItem>
                <img src="/static/iconos/icon-sumary-1.svg" width="24" alt="" />
                <div className="description-text">
                  <span>$400 </span>
                </div>
              </DescriptionItem>
            </>
          ) : (
            <>
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
            </>
          )}
        </ProjectDescription>
      </ProjectDetail>
      {customClass === 'projects-user' && (
        <HistoryProjects>
          <ProjectOffsetHistory />
        </HistoryProjects>
      )}
    </Project>
  );
}
ProjectItem.propTypes = {
  customClass: PropTypes.string,
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
