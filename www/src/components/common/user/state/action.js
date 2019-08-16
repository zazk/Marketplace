import { RECEIVE_USER } from './types';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user,
});
