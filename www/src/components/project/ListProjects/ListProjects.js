import React from 'react';
import ProjectItem from '../ListProjects/ProjectItem';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';
import Const from '../../../utils/const';

function ProjectList({ listprojects, customClass, user }) {
  if (user) {
    console.log('userdata', JSON.stringify(user));
    console.log('accesstokenxxxxx', user && user.accesstoken);
  }
  if (user && user.accesstoken) {
    localStorage.setItem('token', user.accesstoken);
    console.log('userdata', user.accesstoken);
  }
  if (user && user.accesstoken) {
    // test
    fetch(`${Const.urlSite}test`, {
      headers: {
        authorization: 'Bearer ' + user.accesstoken,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('jsonxx', json);
      });
  }

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
