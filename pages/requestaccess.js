import React from 'react';
import Layout from '../components/layout';
import FormRequestAccess from '../components/forms/FormRequestAccess';

function RequestAccess({ user }) {
  return (
    <Layout title="Pachama - Request Access" user={user} bodyclass="headerfull">
      <FormRequestAccess />
    </Layout>
  );
}
export default RequestAccess;
