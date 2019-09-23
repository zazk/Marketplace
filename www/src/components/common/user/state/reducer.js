import { RECEIVE_USER, RECEIVE_CREATE_ACCOUNT, REQUEST_CREATE_ACCOUNT } from './types';
const INITIAL_STATE = {
  user: null,
  createAccount: null,
  loadingform: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.user,
      };
    case REQUEST_CREATE_ACCOUNT:
      return {
        ...state,
        loadingform: true,
      };
    case RECEIVE_CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: action.data,
        loadingform: false,
      };
    default:
      return state;
  }
};

export default userReducer;
