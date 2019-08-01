import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from './types';

const INITIAL_STATE = {
  projects: [],
  loading: false,
};

export const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        loading: false,
      };
    case REQUEST_PROJECTS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
