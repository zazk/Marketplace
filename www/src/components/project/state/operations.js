import { requestProjects, receiveProjects } from './actions';

export const fetchProjects = () => {
  return dispatch => {
    dispatch(requestProjects);
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveProjects(json));
      });
  };
};
