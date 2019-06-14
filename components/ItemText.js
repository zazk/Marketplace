import React from 'react';
import PropTypes from 'prop-types';
import ItemCardLarge from './ItemCardLarge';

function ItemText({ iconcard, type, title, description, card, source, source_link, page, icontitle }) {
  return (
    <div className={`item-one ${type && 'two'}`}>
      <h5 className="item-title">
        {icontitle ? <img src={icontitle} alt="" /> : ''}
        {title}
      </h5>
      <div className="item-description">
        <p>{description}</p>
      </div>
      <div className="item-source">
        {source && source != '' && (
          <span>
            Source: <a href={source_link}>{source}</a>
          </span>
        )}
      </div>
      {card && <ItemCardLarge icon={iconcard} />}

      <style jsx>
        {`
          .item-one {
            margin-bottom: 45px;
            &.two {
              background-color: #fff;
              border-radius: 6px;
              padding: 25px 23px;
              .item-title {
                color: #030922;
                text-transform: inherit;
              }
            }
          }
          .item-title {
            font-size: 22px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
            text-transform: uppercase;
            font-family: 'Work Sans', sans-serif;
            font-weight: 700;
            color: #17b363;
            img {
              margin-right: 10px;
            }
            @media screen and (max-width: 480px) {
              font-size: 20px;
            }
          }
          .item-description {
            font-size: 16px;
            line-height: 24px;
            color: #4a4a4a;
          }
          .item-description p {
            margin: 0;
          }
          .item-source {
            font-size: 14px;
            margin-top: 10px;
            color: #17b363;
            a {
              text-decoration: none;
              color: #4a4a4a;
              color: #17b363;
              &:hover {
                opacity: 0.5;
              }
            }
          }
          .item-source span {
            margin-right: 3px;
          }
        `}
      </style>
    </div>
  );
}
ItemText.propTypes = {
  card: PropTypes.bool,
};
export default ItemText;
