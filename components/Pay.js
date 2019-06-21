import React from 'react';

function Pay({ data }) {
  const project = data;
  return (
    <div className="pay" style={{ backgroundImage: `url(/static/assets/images/bg-footer.jpg)` }}>
      <div className="content">
        <div className="content-main">
          <h3 className="pay-title">{project.tagline_footer}</h3>
          <a href="" className="btn">
            <span>Request Quote</span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .pay {
            background-size: cover;
            background-position: bottom center;
            .content {
              padding-top: 48px;
              padding-bottom: 58px;
            }
            .content-main {
              max-width: 980px;
              text-align: center;
            }
            .btn {
              margin-left: auto;
              margin-right: auto;
            }
          }
          .pay-title {
            font-size: 25px;
            line-height: 37px;
            font-weight: 700;
            font-family: 'Work Sans', sans-serif;
            color: #fff;
            margin: 0;
            margin-bottom: 25px;
            @media screen and (max-width: 480px) {
              font-size: 22px;
              line-height: 29px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Pay;
