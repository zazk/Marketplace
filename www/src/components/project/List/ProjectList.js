import React from 'react';
import ProjectCard from '../Card';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';
import Const from '../../../utils/const';

function ProjectList({ listprojects, customClass, user }) {
  if (user && user.accesstoken) {
    localStorage.setItem('token', user.accesstoken);
  }
  if (user && user.accesstoken) {
    // test
    fetch(`${Const.urlSite}test`, {
      headers: {
        authorization: 'Bearer ' + user.idtoken,
      },
    })
      .then(response => response.json())
      .then(json => {});
  }

  return (
    <ProjectListMain className={customClass && customClass}>
      {listprojects.map((project, i) => (
        <ProjectCard url={'/pdp?id=' + i} key={i} project={project.pdp} customClass={customClass} />
      ))}
    </ProjectListMain>
  );
}
ProjectList.propTypes = {
  listprojects: PropTypes.array,
  type: PropTypes.string,
};
export default ProjectList;
