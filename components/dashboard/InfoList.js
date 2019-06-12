import React from 'react';

function InfoList() {
  return (
    <div className="wrap-info-list">
      <div className="description-list">
        <span>524 credits available</span>
        <p>This project generates 725 per year</p>
      </div>

      <div className="description-list">
        <span>Bluesource</span>
        <p>Project developer</p>
      </div>
      <style jsx>
        {`
          .description-list {
            margin-bottom: 25px;
            span {
              font-size: 16px;
            }
            p {
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoList;
