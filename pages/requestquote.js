import React from 'react';
import Layout from '../components/layout';
import FormRequesQuote from '../components/forms/FormRequestQuote';

function RequestQuote({ user }) {
  return (
    <Layout title="Formulary" user={user}>
      <FormRequesQuote />
    </Layout>
  );
}
export default RequestQuote;
