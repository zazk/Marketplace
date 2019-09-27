import React, { useEffect } from 'react';
import { getAuthLock, checkUser } from './state/operations';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { receiveUser } from './state/actions';
import { withRouter } from 'react-router';

const lock = getAuthLock();
const AuthContext = React.createContext();

const enhacer = compose(
  connect(
    ({ userState }) => ({ user: userState.user }),
    { receiveUser }
  ),
  withRouter
);

export const AuthContextProvider = enhacer(
  ({ user, receiveUser, history, children }) => {
    useEffect(() => {
      const receiveUserInfo = (error, profile) => {
        if (!error) {
          lock.checkSession({}, (_, authResult) => {
            const { accessToken, idToken } = authResult;
            const newUser = {
              ...profile,
              accesstoken: accessToken,
              idtoken: idToken,
            };
            receiveUser(newUser);
            checkUser(newUser.sub, history);
          });
        }
      };

      if (!user) {
        lock.on('authenticated', ({ accessToken }) => {
          lock.getUserInfo(accessToken, receiveUserInfo);
        });
      }
    }, [user, receiveUser, history]);

    return <AuthContext.Provider value={lock} children={children} />;
  }
);
export default AuthContext;
