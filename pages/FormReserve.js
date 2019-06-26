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
        <div className="formulary">
          <h3 className="formulary-title">Reserve credits</h3>
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
              <span>Send</span>
            </button>
          </div>
        </div>
      </ModalBox>

      <style jsx>
        {`
          .formulary {
            padding: 30px;
            width: 750px;
            box-sizing: border-box;

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
