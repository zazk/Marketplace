import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
function ProjectList({ listprojects }) {
  return (
    <ProjectListMain>
      {listprojects.map((project, i) => (
        <ProjectItem key={i} project={project.pdp} customClass="two-item"></ProjectItem>
      ))}
    </ProjectListMain>
  );
}
export default ProjectList;
