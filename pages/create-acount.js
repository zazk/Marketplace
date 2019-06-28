import React from 'react';
import Layout from '../components/layout';
import FormRequesQuote from '../components/forms/FormRequestQuote';
import FormCreateAcount from '../components/forms/FormCreateAcount';

function CreateAcount({ user }) {
  return (
    <Layout title="Formulary" user={user}>
      <FormCreateAcount />
    </Layout>
  );
}
export default CreateAcount;
