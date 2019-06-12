import React from 'react';
import PropTypes from 'prop-types';
const ItemListBanner = ({ title, description }) => {
  return (
    <div className="feature-list-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <style jsx>
        {`
          .feature-list-item {
            margin-bottom: 25px;
            padding-right: 10px;
            box-sizing: border-box;
            position: relative;
            padding-left: 30px;
            &:nth-child(1) {
              h4 {
                &:before {
                  background-image: url(/static/iconos/ico-feature-1.svg);
                }
              }
            }
            &:nth-child(2) {
              h4 {
                &:before {
                  background-image: url(/static/iconos/ico-feature-2.svg);
                }
              }
            }
            &:nth-child(3) {
              h4 {
                &:before {
                  background-image: url(/static/iconos/ico-feature-3.svg);
                }
              }
            }
            &:last-child {
              margin-bottom: 0;
            }
            h4 {
              font-size: 22px;
              margin: 0;
              margin-bottom: 5px;
              font-family: 'Lato', sans-serif;
              font-weight: 600;
              font-style: italic;
              letter-spacing: 0.2px;
              &:before {
                content: '';
                width: 17px;
                height: 20px;
                margin-right: 15px;
                display: inline-block;
                background-position: center center;
                background-repeat: no-repeat;
                position: absolute;
                top: 5px;
                left: 0;
              }
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
ItemListBanner.propTypes = { title: PropTypes.string.isRequired };
export default ItemListBanner;