import { connect } from 'react-redux';
import { fetchProjects } from '../project/state';
import { receiveUser } from '../common/user/state/actions';
import { getAuthLock, checkUser } from '../common/user/state/operations';
import LoginButton from './LoginButton';

const lock = getAuthLock();

const mapStateToProps = state => {
  const openLogin = () => {
    lock.show();
  };

  const logOut = () => {
    lock.logout();
  };

  return {
    user: state.userState.user,
    lock,
    openLogin,
    logOut,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchProjects: () => dispatch(fetchProjects()),
  checkUser: (auth0, history) => checkUser(auth0, history),
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user } = stateProps;
  const receiveUserInfo = (error, profile) => {
    if (!error) {
      dispatchProps.receiveUser(profile);
      return;
    }
  };

  if (!user) {
    lock.on('authenticated', ({ accessToken }) => {
      lock.getUserInfo(accessToken, receiveUserInfo);
    });
  }

  if (user && !user.accesstoken) {
    lock.checkSession({}, (err, authResult) => {
      user.accesstoken = authResult.accessToken;
      user.idtoken = authResult.idToken;
      dispatchProps.receiveUser({ ...user });
    });
  }

  return { ...stateProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LoginButton);
