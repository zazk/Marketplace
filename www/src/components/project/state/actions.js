import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from './types';

export const requestProjects = () => ({
  type: REQUEST_PROJECTS,
});

export const receiveProjects = json => ({
  type: RECEIVE_PROJECTS,
  projects: json,
});
