import React from 'react';
function InfoDescription() {
  return (
    <div className="wrap-info-description">
      <div className="wrap-info-item">
        <div className="info-description-item">
          <span>Boulder Creek</span>
          <p>California, United States</p>
        </div>

        <div className="info-description-item">
          <span>Improve forest mgmt</span>
          <p>Afforestation, deforestation, pest control</p>
        </div>
      </div>

      <style jsx>
        {`
          .wrap-info-item {
            padding: 20px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid #d8d8d8;
          }
          .info-description-item {
            margin-bottom: 20px;
            span {
              font-size: 20px;
              font-weight: 500;
              font-family: 'Work Sans', sans-serif;
              color: #000;
              line-height: 100%;
            }
            p {
              font-size: 16px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
              font-weight: 300;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoDescription;
