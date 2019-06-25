import React, { useState } from 'react';
import Layout from '../components/layout';
import ModalBox from '../components/features/ModalBox';
function FormReserve() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };

  const OpenModal = () => {
    setOpenLightbox(true);
    console.log('test click');
  };

  return (
    <Layout title="Formulary">
      <button type="button" className="btn" onClick={toggle}>
        <span>Request quote</span>
      </button>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <div className="formulary">
          <h3 className="formulary-title">Reserve credits</h3>
          <div className="two-input">
            <div className="form-input">
              <label htmlFor="input-name">
                <span>Name:</span>
              </label>
              <input type="text" id="input-name" value="Lorem Name" />
            </div>

            <div className="form-input">
              <label htmlFor="input-company">
                <span>Company</span>
              </label>
              <input type="text" id="input-company" value="Company Test" />
            </div>
          </div>
          <div className="two-input">
            <div className="form-input">
              <label htmlFor="input-email">
                <span>Email</span>
              </label>
              <input type="text" id="input-email" value="company@correotest.com" />
            </div>

            <div className="form-input">
              <label htmlFor="input-phone">
                <span>Phone</span>
              </label>
              <input type="text" id="input-phone" value="123456789" />
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="input-message">
              <span>Comment</span>
            </label>
            <textarea type="text" id="input-message" />
          </div>
          <div className="form-btn">
            <button className="btn" type="submit">
              <span>Send</span>
            </button>
          </div>
        </div>
      </ModalBox>

      <style jsx>
        {`
          .formulary {
            padding: 30px;
            max-width: 750px;
            box-sizing: border-box;
            width: 100%;
            margin: auto;
            background-color: #fff;
          }
          .formulary-title {
            font-size: 25px;
          }
          .two-input {
            display: flex;
            justify-content: space-between;
            .form-input {
              width: 49%;
            }
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
        `}
      </style>
    </Layout>
  );
}
export default FormReserve;
