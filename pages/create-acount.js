import React from 'react';
import Layout from '../components/layout';
import FormCreateAcount from '../components/forms/FormCreateAcount';

function CreateAcount({ user }) {
  return (
    <Layout title="Formulary" user={user}>
      <FormCreateAcount user={user} url="/list" />
    </Layout>
  );
}
export default CreateAcount;
