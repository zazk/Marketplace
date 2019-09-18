import React from 'react';
import PropTypes from 'prop-types';
import ProjectProgressBar from './ProgressBar';
import ProjectOffsetHistory from './OffsetHistory';

import {
  Project,
  ProjectPicture,
  ProjectDetail,
  ProjectOverview,
  ProjectName,
  ProjectLocation,
  ProjectLocationName,
  ProjectDescription,
  DescriptionItem,
  ProjectHistory,
} from './style';

function ProjectCard({ project, customClass, url }) {
  return (
    <Project to={url} className={customClass}>
      <ProjectPicture picture={project.main_picture} />
      <ProjectDetail>
        <ProjectOverview>
          <ProjectName>{project.title}</ProjectName>
          <ProjectLocation>
            <ProjectLocationName>{project.location.name}</ProjectLocationName>
          </ProjectLocation>
          {customClass === 'projects-user' || customClass === 'projects-backed' ? (
            ''
          ) : (
            <ProjectProgressBar data={project} type={customClass} />
          )}
        </ProjectOverview>
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
        <ProjectHistory>
          <ProjectOffsetHistory />
        </ProjectHistory>
      )}
    </Project>
  );
}

ProjectCard.propTypes = {
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

export default ProjectCard;
