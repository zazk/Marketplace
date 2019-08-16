import { REQUEST_PROJECTS, RECEIVE_PROJECTS, REQUEST_FORM, RECEIVE_FORM, RECEIVE_USER } from './types';

export const requestProjects = () => ({
  type: REQUEST_PROJECTS,
});

export const receiveProjects = json => ({
  type: RECEIVE_PROJECTS,
  projects: json,
});

export const requestForm = data => ({
  type: REQUEST_FORM,
  data: data,
});

export const receiveForm = data => ({
  type: RECEIVE_FORM,
  data: data,
});
