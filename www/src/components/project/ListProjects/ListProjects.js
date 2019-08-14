import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';
function ProjectList({ listprojects }) {
  return (
    <ProjectListMain>
      {listprojects.map((project, i) => (
        <ProjectItem key={i} project={project.pdp} customClass="two-item"></ProjectItem>
      ))}
    </ProjectListMain>
  );
}
ProjectList.propTypes = {
  listprojects: PropTypes.array,
};
export default ProjectList;
