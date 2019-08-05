import React from 'react';
import PropTypes from 'prop-types';
import { FeatureListItem } from './style';

const ItemListBanner = ({ title, description }) => {
  return (
    <FeatureListItem>
      <h4>{title}</h4>
      <p>{description}</p>
    </FeatureListItem>
  );
};
ItemListBanner.propTypes = { title: PropTypes.string.isRequired };
export default ItemListBanner;
