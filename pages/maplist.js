import React from 'react';
import Layout from '../components/layout';
import MapListVisualization from '../components/MapListVisualization';
import PropTypes from 'prop-types';

function ProjectMapList({ user }) {
  return (
    <Layout title="Project List" bodyclass="headerfull" user={user}>
      <div className="map-list">
        <div className="detail-wrap-map">
          <MapListVisualization />
        </div>
        <style jsx global>
          {`
            .detail-wrap-map {
              width: calc(100vw - 430px);
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

ProjectMapList.propTypes = {
  user: PropTypes.object,
};

export default ProjectMapList;
