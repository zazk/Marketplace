import { connect } from 'react-redux';
import { fetchProjects } from '../project/state';
import { receiveUser } from '../common/user/state/actions';
import LoginButton from './LoginButton';
const mapStateToProps = state => {
  return {
    user: state.userState.user,
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
