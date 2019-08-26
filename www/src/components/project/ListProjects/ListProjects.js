import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';
function ProjectList({ listprojects, type }) {
  return (
    <ProjectListMain>
      {listprojects.map((project, i) => (
        <ProjectItem key={i} project={project.pdp} customClass={type}></ProjectItem>
      ))}
    </ProjectListMain>
  );
}
ProjectList.propTypes = {
  listprojects: PropTypes.array,
  type: PropTypes.string,
};
export default ProjectList;
