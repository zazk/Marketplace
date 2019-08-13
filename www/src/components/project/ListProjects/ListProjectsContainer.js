import { connect } from 'react-redux';
import { fetchProjects } from '../state';
import ListProjects from './ListProjects';
import dataProjects from '../../../projects-data/projects';

const mapStateToProps = state => {
  return {
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
)(ListProjects);
