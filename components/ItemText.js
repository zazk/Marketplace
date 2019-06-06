import React from 'react';
import PropTypes from 'prop-types';
import ItemCardLarge from './ItemCardLarge';

function ItemText({ title, description, card, source, page, icono }) {
  return (
    <div className="item-one">
      <h5 className="item-title">
        {icono ? <img src={icono} alt="" /> : ''}
        {title}
      </h5>
      <div className="item-description">
        <p>{description}</p>
      </div>
      <div className="item-source">
        <span>
          Source: <a href="">{source}</a>,
        </span>
        <span>
          <a href="">page {page}</a>
        </span>
      </div>
      {card && <ItemCardLarge />}

      <style jsx>
        {`
          .item-one {
            margin-bottom: 45px;
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
            max-width: 560px;
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
              border-bottom: 2px solid #17b363;
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
