import React from 'react';
import { LoginLink } from './style';
import LoggedUserDropdown from './LoggedUserDropdown';

function LoginButton({ type, user, logOut, openLogin }) {
  return (
    <div>
      {type === 'dropdown' ? (
        user ? (
          <LoggedUserDropdown picture={user.picture} name={user.name}  logOut={logOut} />
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
export default LoginButton;
