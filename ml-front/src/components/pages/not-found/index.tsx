import React from 'react';
import { useLocation } from 'react-router';
import { Layout } from '../../template/layout';

export const NotFound = () => {
  const location = useLocation();
  return (
    <Layout title="404: Not Found" description="website 404: Not Found">
      <h1>Not Found</h1>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </Layout>
  );
};
