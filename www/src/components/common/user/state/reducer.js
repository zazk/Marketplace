import { RECEIVE_USER } from './types';
const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
