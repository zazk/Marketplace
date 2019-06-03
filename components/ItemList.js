import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ title, description }) => {
  return (
    <div className="feature-list-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <style jsx>
        {`
          .feature-list-item {
            margin-bottom: 17px;
            padding-right: 10px;
            box-sizing: border-box;
            &:last-child {
              margin-bottom: 0;
            }
            h4 {
              font-size: 22px;
              margin: 0;
              margin-bottom: 5px;
              font-weight: normal;
            }
            p {
              margin: 0;
              color: rgba(54, 54, 54, 0.56);
            }
            @media screen and (max-width: 640px) {
              h4 {
                font-size: 18px;
              }
            }
          }
        `}
      </style>
    </div>
  );
};
ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ItemList;
