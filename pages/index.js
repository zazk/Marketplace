import React from 'react';
import Layout from '../components/layout';
import Home from '../components/Home';

export default ({
  url: {
    query: { id },
  },
}) => {
  return (
    <Layout>
      <Home id={id} />
    </Layout>
  );
};
