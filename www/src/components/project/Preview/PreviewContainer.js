import { connect } from 'react-redux';
import { fetchProjects } from '../state';
import { receiveUser } from '../../common/user/state/actions';
import Preview from './Preview';

const mapStateToProps = state => {
  return {
    projects: state.projectState.projects,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchProjects: () => fetchProjects()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
