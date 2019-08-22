import {
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  REQUEST_FORM,
  RECEIVE_FORM,
  REQUEST_CREATE_ACCOUNT,
  RECEIVE_CREATE_ACCOUNT,
} from './types';

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

export const requestCreateAccount = data => ({
  type: REQUEST_CREATE_ACCOUNT,
  data: data,
});

export const receiveCreateAccount = data => ({
  type: RECEIVE_CREATE_ACCOUNT,
  data: data,
});
