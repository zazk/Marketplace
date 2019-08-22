import {
  requestProjects,
  receiveProjects,
  receiveForm,
  requestForm,
  requestCreateAccount,
  receiveCreateAccount,
} from './actions';

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

export const submitRequestCreateAccount = data => {
  console.log('submitRequestCreateAccountXXX');
  return dispatch => {
    dispatch(requestCreateAccount(data));
    return fetch('http://localhost:3001/api/account', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        dispatch(receiveCreateAccount(data));
      });
  };
};
