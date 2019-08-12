import { requestProjects, receiveProjects, receiveForm, requestForm } from './actions';

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

export const submitRequest = data => {
  return dispatch => {
    dispatch(requestForm(data));
    return fetch(`/api/requestQuote`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        dispatch(receiveForm(data));
      });
  };
};
