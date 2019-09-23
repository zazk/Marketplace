import React from 'react';
import FormCreateAcount from '../components/forms/FormCreateAccount';
import withAuth from '../hocs/withAuth';
function CreateAccount() {
  return <FormCreateAcount></FormCreateAcount>;
}
export default withAuth(CreateAccount);
