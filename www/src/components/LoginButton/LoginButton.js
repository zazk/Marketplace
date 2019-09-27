import React, { useEffect, useMemo } from 'react';
import { withRouter } from 'react-router';
import { LoginLink } from './style';
import LoggedUserDropdown from './LoggedUserDropdown';

function LoginButton({ type, user, history, checkUser, logOut, openLogin }) {
  const sub = useMemo(() => (user && user.sub) || null, [user]);

  useEffect(() => {
    if (sub) checkUser(sub, history);
  }, [sub, history, checkUser]);

  return (
    <div>
      {type === 'dropdown' ? (
        user ? (
          <LoggedUserDropdown userPicture={user.picture} logOut={logOut} />
        ) : (
          <LoginLink onClick={() => openLogin()}>Log In</LoginLink>
        )
      ) : (
        <button
          className="btn"
          onClick={() => (!user ? openLogin() : logOut())}
        >
          <span> {!user ? ' Log In' : 'Log Out'}</span>
        </button>
      )}
    </div>
  );
}
export default withRouter(LoginButton);
