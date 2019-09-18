import { connect } from 'react-redux';
import { fetchProjects } from '../state';
import ProjectList from './ProjectList';
import dataProjects from '../../../projects-data/projects';

const mapStateToProps = state => {
  return {
    user: state.userState.user,
    projects: state.projectState.projects,
    listprojects: dataProjects,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
