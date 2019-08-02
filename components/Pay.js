import React from 'react';
import FormRequesQuote from '../components/forms/FormRequestQuote';

function Pay({ data, user }) {
  const project = data;
  return (
    <div className="pay" style={{ backgroundImage: `url(/static/assets/images/bg-footer.jpg)` }}>
      <div className="content">
        <div className="content-main">
          <h3 className="pay-title">{project.tagline_footer}</h3>
          <div className="pay-btn">
            <FormRequesQuote user={user} custombutton="largemobil" />
          </div>
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
          .pay-btn {
            @media screen and (min-width: 481px) {
              display: flex;
              justify-content: center;
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
