import React from 'react';
import ListProjects from '../components/project/ListProjects';
import ValidateAuth from '../components/ValidateAuth';
function Projects() {
  return (
    <ValidateAuth>
      <ListProjects customClass="columns"></ListProjects>;
    </ValidateAuth>
  );
}

export default Projects;
