import React from 'react';
import { Auth0Lock } from 'auth0-lock';
function LoginButton({ receiveUser }) {
  console.log('receiveUser', receiveUser);

  const clienteId = 'sfj8nlpFONfJanArPrB8PpcB0E9FU4UI';
  const domain = 'marketplace-pachama.auth0.com';
  const options = {
    autoclose: true,
    auth: {
      redirect: false,
    },
  };

  const lock = new Auth0Lock(clienteId, domain, options);
  lock.on('authenticated', function(authResult) {
    // Use the token in authResult to getUserInfo() and save it if necessary
    console.log('authResult', authResult);

    this.getUserInfo(authResult.accessToken, function(error, profile) {
      if (!error) {
        // Handle error
        const datauser = receiveUser(profile);
        console.log('datauser', datauser);
        return;
      }
    });
  });

  const openLogin = () => {
    lock.show();
  };
  return (
    <button className="btn" onClick={() => openLogin()}>
      <span>Log In</span>
    </button>
  );
}
export default LoginButton;
