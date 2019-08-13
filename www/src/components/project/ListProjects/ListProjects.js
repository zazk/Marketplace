import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
function ProjectList({ listprojects }) {
  return (
    <ProjectListMain>
      {listprojects.map((project, i) => (
        <ProjectItem
          key={i}
          customClass="two-item"
          image={project.pdp.main_picture}
          name={project.pdp.title}
          ubication={project.pdp.location.name}
          credits={project.pdp.credits_avail.quatinty}
          totalarea={project.pdp.total_land.area}
          totalunit={project.pdp.total_land.unit}
          proyectType={project.pdp.project_type}
        ></ProjectItem>
      ))}
    </ProjectListMain>
  );
}
export default ProjectList;
