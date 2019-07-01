import React from 'react';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

import FormCreateAcount from '../components/forms/FormCreateAcount';

function CreateAcount({ user }) {
  return (
    <Layout title="Formulary" user={user}>
      <FormCreateAcount user={user} url="/list" />
    </Layout>
  );
}
CreateAcount.propTypes = {
  user: PropTypes.object,
};
export default CreateAcount;
