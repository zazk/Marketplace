import { connect } from 'react-redux';
import { fetchProjects } from '../project/state';
import { receiveUser } from '../common/user/state/action';
import LoginButton from './LoginButton';
const mapStateToProps = state => {
  return {
    projects: state.projectState.projects,
  };
};
const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
