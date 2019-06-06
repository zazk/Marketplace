import React from 'react';
import PropTypes from 'prop-types';
const ItemList = ({ title, description, icono }) => {
  return (
    <div className="feature-list-item">
      <img src={icono} width="24" alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
      <style jsx>
        {`
          .feature-list-item {
            margin-bottom: 17px;
            padding-right: 10px;
            box-sizing: border-box;
            position: relative;
            padding-left: 40px;
            img {
              position: absolute;
              top: 5px;
              left: 0;
            }
            &:last-child {
              margin-bottom: 0;
            }
            h4 {
              font-size: 20px;
              margin: 0;
              font-style: italic;
              margin-bottom: 5px;
              font-weight: normal;
              color: #030922;
            }
            p {
              margin: 0;
              color: #969db6;
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
ItemList.propTypes = { title: PropTypes.string.isRequired, description: PropTypes.string.isRequired };
export default ItemList;
