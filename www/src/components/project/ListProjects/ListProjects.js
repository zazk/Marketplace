import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';

function ProjectList({ listprojects, customClass }) {
  return (
    <ProjectListMain className={customClass && customClass}>
      {listprojects.map((project, i) => (
        <ProjectItem url={'/pdp?id=' + i} key={i} project={project.pdp} customClass={customClass}></ProjectItem>
      ))}
    </ProjectListMain>
  );
}
ProjectList.propTypes = {
  listprojects: PropTypes.array,
  type: PropTypes.string,
};
export default ProjectList;
