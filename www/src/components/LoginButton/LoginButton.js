import React, { useState } from 'react';
import { Auth0Lock } from 'auth0-lock';
import { CompanyName, CompanyImage, LoginLink, WrapLabelDropdown } from './style';

function LoginButton({ receiveUser, type, user }) {
  const datauser = user;

  const [openDropdown, setDropdown] = useState(0);
  const clienteId = 'sfj8nlpFONfJanArPrB8PpcB0E9FU4UI';
  const domain = 'marketplace-pachama.auth0.com';
  const options = {
    autoclose: true,
    auth: {
      redirect: false,
    },
  };

  const lock = new Auth0Lock(clienteId, domain, options);

  function checkUser(profile) {
    // 5d44751bb73c370cb90fb0c7
    // fetch('/api/account/')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('json', json);
    //   });
    const datauser = {
      role_id: 1,
      name: profile.name,
      username: profile.email,
      email: profile.email,
      auth0: profile.sub,
    };
    fetch('http://localhost:3001/api/account', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(datauser),
    }).then(res => {
      // res.status === 200;
      console.log('res', res);
    });
  }

  lock.on('authenticated', function(authResult) {
    this.getUserInfo(authResult.accessToken, function(error, profile) {
      if (!error) {
        receiveUser(profile);
        checkUser(profile);
        return;
      }
    });
  });

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
export default LoginButton;
