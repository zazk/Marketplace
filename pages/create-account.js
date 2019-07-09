import React from 'react';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import FormCreateAcount from '../components/forms/FormCreateAcount';

function CreateAcount({ user, router }) {
  const isSingle = router.query.single;
  const url = isSingle ? `/pdp?id=${isSingle}` : '/list';

  return (
    <Layout title="Formulary" user={user} bodyclass="headerfull">
      <FormCreateAcount user={user} url={url} />
    </Layout>
  );
}
CreateAcount.propTypes = {
  user: PropTypes.object,
};
export default withRouter(CreateAcount);
