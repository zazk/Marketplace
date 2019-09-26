import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { CompanyName, CompanyImage, LoginLink, WrapLabelDropdown } from './style';
function LoginButton({ type, user, history, checkUser, LogOut, openLogin }) {
  const [openDropdown, setDropdown] = useState(0);

  if (user && user.sub) {
    checkUser(user.sub, history);
  }

  return (
    <div>
      {type === 'dropdown' ? (
        user ? (
          <div className="wrap-company-user">
            <CompanyName className={`wrap-drodown ${openDropdown === 1 && 'active'}`}>
              <WrapLabelDropdown>
                <CompanyImage style={{ backgroundImage: `url(${user.picture})` }} />
                <div className="dropdown-btn ">
                  <div className="dropdown-open dropdown-controls" onClick={() => setDropdown(1)} />
                  <div className="dropdown-close dropdown-controls" onClick={() => setDropdown(0)} />
                  <span className="dropdown-label company-name">{user.name}</span>
                  <img className="drop-down-icon" src="/static/iconos/arrow-down.svg" width="12" alt="" />
                </div>
              </WrapLabelDropdown>
              <div className="dropdown">
                <ul className="dropdown-main">
                  <li className="dropdown-item">
                    <span className="dropdown-link" onClick={() => LogOut()}>
                      Log Out
                    </span>
                  </li>
                </ul>
              </div>
            </CompanyName>
          </div>
        ) : (
          <LoginLink onClick={() => openLogin()}>Log In</LoginLink>
        )
      ) : (
        <button className="btn" onClick={() => (!user ? openLogin() : LogOut())}>
          <span> {!user ? ' Log In' : 'Log Out'}</span>
        </button>
      )}
    </div>
  );
}
export default withRouter(LoginButton);
