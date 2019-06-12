import React from 'react';

function Benefits() {
  return (
    <div className="wrap-benefits">
      <h3 className="aside-title">Co-benefits generation</h3>
      <div className="benefits-item">
        <div className="benefits-text">
          <h4 className="benefits-title">Biodiversity</h4>
          <p>
            10 new species were planted since the last verification. The developer plans on having planted 35 different
            species by the end of this project.
          </p>
        </div>
        <div className="benefits-numbers">
          <span>24</span>
          <em>(10&#x2191;)</em>
        </div>
      </div>

      <div className="benefits-item">
        <div className="benefits-text">
          <h4 className="benefits-title">Hiring</h4>
          <p>
            25 new jobs were generated since the last verification, including logistics, maintenance and management
            roles.
          </p>
        </div>
        <div className="benefits-numbers">
          <span>123</span>
          <em>(25&#x2191;)</em>
        </div>
      </div>

      <div className="benefits-item">
        <div className="benefits-text">
          <h4 className="benefits-title">Water wells</h4>
          <p>No new water wells have been built lately.</p>
        </div>
        <div className="benefits-numbers">
          <span>6</span>
        </div>
      </div>

      <div className="benefits-item">
        <div className="benefits-text">
          <h4 className="benefits-title">Monthly income</h4>
          <p>Material sales resulting from controlled trimming have fluctuated positively.</p>
        </div>
        <div className="benefits-numbers">
          <span>$100k</span>
          <em>(&#x2191;3%)</em>
        </div>
      </div>
      <style jsx>
        {`
          .wrap-benefits {
            border-bottom: 1px solid #979797;
            margin-bottom: 15px;
          }
          .benefits-item {
            position: relative;
            padding-right: 140px;
            padding-bottom: 22px;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(151, 151, 151, 0.34);
            &:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
          }
          .benefits-numbers {
            position: absolute;
            right: 0;
            top: 0;
            span {
              font-size: 32px;
              margin-right: 5px;
            }
            em {
              font-style: normal;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
            }
          }
          .benefits-text {
            font-size: 14px;
            color: #000;
            p {
              margin: 0;
            }
          }
          .benefits-title {
            font-size: 16px;
            font-weight: 500;
            color: #000;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
export default Benefits;
