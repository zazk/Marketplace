import { requestCreateAccount, receiveCreateAccount } from './actions';
import Api from '../../Api';

export const submitRequestCreateAccount = (data, token) => {
  return dispatch => {
    console.log(data);
    dispatch(requestCreateAccount(data));
    return Api.makeRequest({
      url: '/account',
      data: {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      },
    })
      .then(data => {
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
