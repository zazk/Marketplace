import React from 'react';
import PropTypes from 'prop-types';
import ItemCardLarge from '../ItemCardLarge';
import { ItemSource, ItemTitle, ItemDescripcion, ItemOne } from './style';

function ItemText({ iconcard, type, title, description, card, source, source_link, page, icontitle }) {
  return (
    <ItemOne className={type && 'two'}>
      <ItemTitle className="item-title">
        {icontitle ? <img src={icontitle} alt="" /> : ''}
        {title}
      </ItemTitle>
      <ItemDescripcion>
        <p>{description}</p>
      </ItemDescripcion>
      <ItemSource>
        {source && source !== '' && (
          <span>
            Source: <a href={source_link}>{source}</a>
          </span>
        )}
      </ItemSource>
      {card && <ItemCardLarge icon={iconcard} />}
    </ItemOne>
  );
}
ItemText.propTypes = {
  card: PropTypes.bool,
};
export default ItemText;
