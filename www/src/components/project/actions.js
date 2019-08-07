import { Api } from '../common';

export const fetchProject = ({ project }) => {
  return dispatch => {
    return Api.fetchProject({ project })
      .then(projectData => {
        dispatch({
          type: 'FETCH_PROJECT_SUCCESS',
          projectData,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
