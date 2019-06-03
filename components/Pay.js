import React from 'react';

function Pay({ data }) {
  const project = data;
  return (
    <div className="pay">
      <div className="content">
        <h3 className="pay-title">{project.tagline_footer}</h3>
        <a href="" className="btn gray">
          Pledge now
        </a>
      </div>
      <style jsx>
        {`
          .pay {
            .content {
              padding-top: 48px;
              padding-bottom: 58px;
              background-color: #a8a8a8;
            }
          }
          .pay-title {
            font-size: 26px;
            line-height: 40px;
            margin: 0;
            font-weight: normal;
            margin-bottom: 25px;
          }
        `}
      </style>
    </div>
  );
}
export default Pay;
