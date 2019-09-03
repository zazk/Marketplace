import React from 'react';
function ValidateAuth({ history, user, children }) {
  if (!user) {
    history.push('/');
  }
  return <>{children}</>;
}
export default ValidateAuth;
