import { connect } from 'react-redux';
import { fetchProjects } from '../state';
import Preview from './Preview';

const mapStateToProps = state => ({
  projects: state.projectState.projects,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
