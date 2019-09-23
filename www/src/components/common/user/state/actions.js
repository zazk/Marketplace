import { RECEIVE_USER, REQUEST_CREATE_ACCOUNT, RECEIVE_CREATE_ACCOUNT } from './types';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user,
});

export const requestCreateAccount = (data, token) => ({
  type: REQUEST_CREATE_ACCOUNT,
  data: data,
  token: token,
});

export const receiveCreateAccount = (data, token) => ({
  type: RECEIVE_CREATE_ACCOUNT,
  data: data,
  token: token,
});
