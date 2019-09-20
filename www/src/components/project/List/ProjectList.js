import React from 'react';
import ProjectCard from '../Card';
import { ProjectListMain } from './style';
import PropTypes from 'prop-types';
import Const from '../../../utils/const';

function ProjectList({ listprojects, customClass, user }) {
  console.log(listprojects);
  if (user) {
    console.log('userdata', JSON.stringify(user));
    console.log('accesstokenxxxxx', user.accesstoken);
  }
  // console.log('userdata', user.accesstoken);
  // if (user.accesstoken) {
  //   // test
  //   fetch(`${Const.urlSite}test`, {
  //     headers: {
  //       Authorization: 'Bearer ' + user.accesstoken,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log('jsonxx', json);
  //     });
  // }

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
