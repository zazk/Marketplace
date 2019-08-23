import { requestCreateAccount, receiveCreateAccount } from './actions';

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
        console.log('data desde operation', data);
        if (data.username) {
          dispatch(receiveCreateAccount(data));
        } else {
          const error = {
            data,
            error: 'error',
          };
          dispatch(receiveCreateAccount(error));
        }
      });
  };
};
