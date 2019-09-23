import React from 'react';
import ProjectList from '../components/project/List';
import withAuth from '../hocs/withAuth';
function Projects() {
  return <ProjectList customClass="columns" />;
}

//export default withAuth(Projects);
export default Projects;
