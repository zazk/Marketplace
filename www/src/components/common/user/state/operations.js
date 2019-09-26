import { requestCreateAccount, receiveCreateAccount } from './actions';
import { Auth0Lock } from 'auth0-lock';
import Api from '../../Api';
import Config from '../../../../utils/config';

export const submitRequestCreateAccount = (data, token) => {
  return dispatch => {
    console.log(data);
    dispatch(requestCreateAccount(data));
    return Api.makeRequest({
      url: '/account',
      data: {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      },
    }).then(data => {
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

export const getAuthLock = () => {
  const options = {
    autoclose: true,
    auth: {
      audience: 'api.marketplace.pachama.com',
      responseType: 'token id_token',
      redirect: false,
    },
  };
  return new Auth0Lock(Config.auth0.clientId, Config.auth0.domain, options);
};

export const checkUser = (auth0, history) => {
  fetch(`${Config.api.host}/api/account/auth0/${auth0}`)
    .then(response => response.json())
    .then(json => {
      if (json.username) {
        history.push('/list');
      } else {
        history.push('/create-account');
      }
    });
};
