import { requestCreateAccount, receiveCreateAccount } from './actions';
import Const from '../../../../utils/const';
export const submitRequestCreateAccount = (data, token) => {
  console.log('token', data, token);
  // data.token = token;
  return dispatch => {
    dispatch(requestCreateAccount(data));
    return fetch(`${Const.urlSite}api/account`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...data, token }),
    })
      .then(response => response.json())
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
