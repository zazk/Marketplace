import React from 'react';
import ListProjects from '../components/project/ListProjects';
import withAuth from '../hocs/withAuth';
function Projects() {
  return <ListProjects customClass="columns"></ListProjects>;
}

export default withAuth(Projects);
