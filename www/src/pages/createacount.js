import React from 'react';
import { withRouter } from 'react-router';
import FormCreateAcount from '../components/forms/FormCreateAccount';

function CreateAccount({ location }) {
  return (
    <>
      <FormCreateAcount></FormCreateAcount>
    </>
  );
}
export default withRouter(CreateAccount);
