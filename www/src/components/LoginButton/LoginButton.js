import React, { useState } from 'react';
import { Auth0Lock } from 'auth0-lock';
import { withRouter } from 'react-router';
import { CompanyName, CompanyImage, LoginLink, WrapLabelDropdown } from './style';
import Const from '../../utils/const';
function LoginButton({ receiveUser, type, user, history, checkUser }) {
  const [openDropdown, setDropdown] = useState(0);

  const clienteId = Const.clienteId;
  const domain = Const.domainAuth;
  const options = {
    autoclose: true,
    auth: {
      audience: 'api.marketplace.pachama.com',
      responseType: 'token id_token',
      redirect: false,
    },
  };

  const lock = new Auth0Lock(clienteId, domain, options);

  if (!user) {
    lock.on('authenticated', function(authResult) {
      this.getUserInfo(authResult.accessToken, function(error, profile) {
        if (!error) {
          receiveUser(profile);
          checkUser(profile.sub, history);
          return;
        }
      });
    });
  }

  if (user && !user.accesstoken) {
    lock.checkSession({}, function(err, authResult) {
      if (user && authResult) {
        user.accesstoken = authResult.accessToken;
        user.idtoken = authResult.idToken;
        receiveUser({ ...user });
      }
    });
  }
  const openLogin = () => {
    lock.show();
  };

  const LogOut = () => {
    lock.logout();
  };

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
