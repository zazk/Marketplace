import React from 'react';

function InfoDescription() {
  return (
    <div className="wrap-info-description">
      <div className="info-description-item">
        <span>Boulder Creek</span>
        <p>California, United States</p>
      </div>

      <div className="info-description-item">
        <span>Improve forest mgmt</span>
        <p>Afforestation, deforestation, pest control</p>
      </div>

      <div className="progressbar">
        <div className="progressbar-item">
          <span>
            80<em>%</em>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .info-description-item {
            margin-bottom: 30px;
            span {
              font-size: 20px;
            }
            p {
              font-size: 16px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
            }
          }
          .progressbar {
            height: 6px;
            background-color: #e2e5ee;
            border-radius: 3px;
            margin-top: 40px;
            margin-bottom: 30px;
          }
          .progressbar-item {
            border-radius: 3px;
            width: 80%;
            background-image: linear-gradient(to left, #17b363, #33da9c);
            height: 100%;
            position: relative;
            span {
              width: 35px;
              height: 32px;
              background-color: #17b363;
              position: absolute;
              right: 0;
              bottom: 0;
              display: block;
              font-size: 12px;
              font-family: 'Work Sans', sans-serif;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              em {
                font-size: 10px;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoDescription;
