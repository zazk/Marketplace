import { requestProjects, receiveProjects } from './actions';

export const fetchProjects = () => {
  console.log('envia fetchProjects');
  return dispatch => {
    dispatch(requestProjects);
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        dispatch(receiveProjects(json));
      });
  };
};
