import React from 'react';
import PropTypes from 'prop-types';
import { FeatureListItem } from './style';
const ItemList = ({ title, description, icono }) => {
  return (
    <FeatureListItem>
      <img src={icono} width="24" alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </FeatureListItem>
  );
};
ItemList.propTypes = { title: PropTypes.string.isRequired, description: PropTypes.string.isRequired };
export default ItemList;
