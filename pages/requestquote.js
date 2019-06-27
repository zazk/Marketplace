import React from 'react';
import Layout from '../components/layout';
import FormRequesQuote from '../components/forms/FormRequestQuote';

function RequestQuote({ user }) {
  return (
    <Layout title="Formulary" user={user}>
      <FormRequesQuote />

      <style jsx>
        {`
          .formulary {
            width: 1024px;
            box-sizing: border-box;
            margin: auto;
            background-color: #fff;
            box-sizing: border-box;
            position: relative;
          }
          .formulary-main {
            position: relative;
            z-index: 1;
          }
          .formulary-success {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 200;
            width: 100%;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(240deg, #0fd856, #01a796, #01a697);
            opacity: 0;
            visibility: hidden;
            height: 0;
            overflow: hidden;
            transition: opacity 0.5s;
            &.active {
              opacity: 1;
              visibility: visible;
              height: 100%;
            }
          }
          .success-title {
            font-size: 44px;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 10px;
            line-height: 49px;
            font-family: 'Work Sans', sans-serif;
          }
          .success-description {
            p {
              margin: 0;
              font-size: 16px;
              line-height: 26px;
            }
          }
          .success-content {
            max-width: 390px;
            text-align: center;
            color: #fff;
          }
          .success-btn {
            justify-content: center;
            margin-top: 65px;
          }
          .two-input {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
          }

          .form-input {
            position: relative;
            border: 1px solid #000;
            margin-bottom: 10px;
            input,
            textarea {
              border: none;
              background: none;
              width: 100%;
              height: 35px;
              font-size: 14px;
              padding: 0 10px;
            }
            textarea {
              height: 100px;
            }
            label {
              padding: 5px 10px;
              span {
                font-size: 14px;
              }
            }
          }
          .form-title-section {
            padding: 80px 45px;
            box-sizing: border-box;
            width: 35.5%;
            background-image: linear-gradient(210deg, #0fd856, #01a796, #01a697);
          }
          .form-title-inner {
            max-width: 250px;
          }
          .form-title {
            font-size: 44px;
            font-weight: bold;
            font-family: 'Work Sans', sans-serif;
            color: #fff;
          }
          .form-description-title {
            font-size: 16px;
            line-height: 26px;
            color: #fff;
          }
          .form-list-inputs {
            width: 64.5%;
            box-sizing: border-box;
            padding-top: 100px;
            padding-bottom: 70px;
            padding-left: 65px;
            padding-right: 65px;
          }
          .form-list-inner {
            max-width: 550px;
          }
          .form-btn {
            display: flex;
            justify-content: flex-end;
            margin-top: 21px;
          }
          .input-item.info {
            position: relative;
          }
          .form-info {
            position: absolute;
            right: 0;
            top: -3px;
            z-index: 3;
            .wrap-tooltip .tooltip-inner {
              width: 130px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
export default RequestQuote;
