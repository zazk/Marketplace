import { RECEIVE_PROJECTS, REQUEST_PROJECTS, REQUEST_FORM, RECEIVE_FORM } from './types';

const INITIAL_STATE = {
  projects: [],
  loading: false,
  formsuccess: null,
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

    case REQUEST_FORM:
      return {
        ...state,
        loadingform: true,
      };
    case RECEIVE_FORM:
      return {
        ...state,
        formsuccess: action.data,
        loadingform: false,
      };

    default:
      return state;
  }
};
