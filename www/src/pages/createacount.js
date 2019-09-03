import React from 'react';
import { withRouter } from 'react-router';
import FormCreateAcount from '../components/forms/FormCreateAccount';
import ValidateAuth from '../components/ValidateAuth';
function CreateAccount({ location }) {
  return (
    <ValidateAuth>
      <FormCreateAcount></FormCreateAcount>
    </ValidateAuth>
  );
}
export default withRouter(CreateAccount);
