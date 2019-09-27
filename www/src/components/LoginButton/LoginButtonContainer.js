import React, { useContext, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../project/state';
import { receiveUser } from '../common/user/state/actions';
import AuthContext from '../common/user/AuthContext.js';
import LoginButton from './LoginButton';

const mapStateToProps = state => ({
  user: state.userState.user,
});

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchProjects: () => dispatch(fetchProjects()),
});

const mergeProps = (stateProps, dispatchProps) => {
  return { ...stateProps, ...dispatchProps };
};

const Wraper = p => {
  const lock = useContext(AuthContext);

  const openLogin = useCallback(() => {
    if (lock && lock.show) lock.show();
  }, [lock]);

  const logOut = useCallback(() => {
    if (lock && lock.logout) lock.logout();
  }, [lock]);

  const completeProps = { ...p, lock, openLogin, logOut };

  return <LoginButton {...completeProps} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Wraper);
