import React, { useState } from 'react';
import Layout from '../components/layout';
import ModalBox from '../components/features/ModalBox';
function FormReserve({ user }) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };

  return (
    <Layout title="Formulary" user={user}>
      <button type="button" className="btn" onClick={toggle}>
        <span>Request quote</span>
      </button>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <div className="formulary flex">
          <div className="form-title-section">
            <div className="form-title-inner">
              <h3 className="form-title">Request Carbon Credits</h3>
              <div className="form-description-title">
                <p>Here is going to be a text that explains users what happens after asking for the budget.</p>
              </div>
            </div>
          </div>
          <div className="form-list-inputs">
            <div className="form-list-inner">
              <div className="two-input">
                <div className="form-input">
                  <label>
                    <span>Name:</span>
                  </label>
                  <input type="text" id="input-name" defaultValue={`Lorem Name`} />
                </div>

                <div className="form-input">
                  <label>
                    <span>Company</span>
                  </label>
                  <input type="text" id="input-company" defaultValue={`Company Test`} />
                </div>
              </div>
              <div className="two-input">
                <div className="form-input">
                  <label>
                    <span>Email</span>
                  </label>
                  <input type="text" id="input-email" defaultValue={`company@correotest.com`} />
                </div>

                <div className="form-input">
                  <label>
                    <span>Phone</span>
                  </label>
                  <input type="text" id="input-phone" defaultValue={`123456789`} />
                </div>
              </div>

              <div className="form-input">
                <label>
                  <span>Comment</span>
                </label>
                <textarea type="text" id="input-message" />
              </div>
              <div className="form-btn">
                <button className="btn" type="submit">
                  <span>Request quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalBox>

      <style jsx>
        {`
          .formulary {
            width: 1148px;
            box-sizing: border-box;
            margin: auto;
            background-color: #fff;
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
          .form-title-section {
            padding: 80px 20px;
            box-sizing: border-box;
            width: 35.5%;
            background-image: linear-gradient(214deg, #0fd856, #01a796, #01a697);
          }
          .form-title-inner {
            max-width: 315px;
            margin-left: auto;
            margin-right: 0;
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
            padding-top: 87px;
            padding-left: 72px;
            padding-right: 20px;
          }
          .form-list-inner {
            max-width: 560px;
          }
          .form-btn {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </Layout>
  );
}
export default FormReserve;
