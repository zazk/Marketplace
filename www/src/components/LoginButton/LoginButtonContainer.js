import React, { useContext, useCallback } from 'react';
import { connect } from 'react-redux';
import AuthContext from '../common/user/AuthContext.js';
import LoginButton from './LoginButton';

const mapStateToProps = ({ userState }) => ({ user: userState.user });

const Wraper = p => {
  const lock = useContext(AuthContext);

  const openLogin = useCallback(() => {
    if (lock && lock.show) lock.show();
  }, [lock]);

  const logOut = useCallback(() => {
    if (lock && lock.logout) lock.logout();
  }, [lock]);

  return <LoginButton openLogin={openLogin} logOut={logOut} {...p} />;
};

export default connect(mapStateToProps)(Wraper);
