import React from 'react';
import PropTypes from 'prop-types';
import { ItemList } from './style';

const ItemListHero = ({ title, description }) => {
  return (
    <ItemList>
      <h4>{title}</h4>
      <p>{description}</p>
    </ItemList>
  );
};
ItemListHero.propTypes = { title: PropTypes.string.isRequired };
export default ItemListHero;
