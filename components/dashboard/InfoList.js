import React from 'react';

function InfoList() {
  return (
    <div className="wrap-info-list">
      <h3 className="progress-title">524 credits available</h3>
      <div className="progressbar">
        <div className="progressbar-item" />
      </div>
      <div className="progress-description">
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
              font-size: 20px;
              font-weight: 500;
              font-family: 'Work Sans', sans-serif;
              color: rgba(0, 0, 0, 0.5);
            }
            p {
              font-size: 12px;
              color: rgba(0, 0, 0, 1);
              margin: 0;
            }
          }
          .progress-title {
            font-size: 20px;
            color: #07bc7a;
            font-family: 'Work Sans', sans-serif;
            font-weight: 500;
            margin: 0;
          }
          .progressbar {
            margin: 8px 0;
            height: 4px;
            background-color: #e2e5ee;
            border-radius: 3px;
          }
          .progress-description {
            margin-bottom: 20px;
            p {
              margin: 0;
              font-size: 12px;
              color: #000;
            }
          }
          .progressbar-item {
            border-radius: 3px;
            width: 30%;
            background-image: linear-gradient(to left, #17b363, #33da9c);
            height: 100%;
            position: relative;
          }
        `}
      </style>
    </div>
  );
}
export default InfoList;
