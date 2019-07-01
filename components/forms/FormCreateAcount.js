import React, { useState } from 'react';
import ModalBox from '../features/ModalBox';
import Button from '@material-ui/core/Button';
import { Mixpanel } from '../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';

const UppercasingTextField = props => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      props.form.setFieldValue(props.field.name, value ? value.toUpperCase() : '');
    }}
  />
);

function FormCreateAcount({ user, url }) {
  const emailUser = user ? user.emails[0].value : 'email@mail.com';

  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };
  function trackRequestQuote(status) {
    if (user) {
      Mixpanel.identify(user.id);
    }
    var event = status + ' Create Acount';
    Mixpanel.track(event);
  }
  trackRequestQuote('Filling');

  return (
    <div className="create-acount formulary">
      <div className="content">
        <div
          className="acount-banner"
          style={{ backgroundImage: `url(/static/assets/images/banner-create-acount.jpg)` }}
        />
        <div className="create-acount-main">
          <h3 className="form-title">Welcome to Pachama</h3>
          <div className="form-description-title">
            <p>Create a Pachama account to acceed to our proyects.</p>
          </div>
          <div className="form-list-inner">
            <h3 className="form-title-form">Create an account</h3>
            <Formik
              initialValues={{
                email: emailUser,
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                  toggle();
                }, 500);
              }}
              render={({ submitForm, isSubmitting, values, setFieldValue }) => (
                <Form>
                  <div className="input-acount-item">
                    <Field fullWidth name="email" type="email" label="Email" component={UppercasingTextField} />
                  </div>
                  <div className="input-acount-item">
                    <Field fullWidth name="name" type="text" label="Name" component={TextField} />
                  </div>
                  <div className="input-acount-item">
                    <Field fullWidth name="companyname" type="text" label="Company name" component={TextField} />
                  </div>
                  <div className="input-acount-item">
                    <Field fullWidth name="phonenumber" type="text" label="Phone Number" component={TextField} />
                  </div>
                  <div className="acount-terms">
                    <p>
                      By clicking this button, you agree to
                      <a href="">Pachama terms.</a>
                    </p>
                  </div>
                  {isSubmitting && <LinearProgress />}
                  <div className="form-btn">
                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => (trackRequestQuote('Submit'), submitForm)}
                    >
                      <span>Create an account</span>
                    </button>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>

      <ModalBox isOpen={openLightbox} toggle={toggle} url={url}>
        <div className="wrap-success-acount">
          <div className="formulary-success flex active">
            <div className="success-content">
              <figure>
                <img src="/static/iconos/icon-success.svg" width="80" alt="" />
              </figure>
              <h3 className="success-title">You have created your account succesfully </h3>
              <div className="success-description">
                <p>We will send you an email with the confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </ModalBox>

      <style jsx>
        {`
          .content {
            position: relative;
            padding-bottom: 75px;
          }
          .acount-banner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 330px;
            background-size: cover;
            background-position: center center;
            z-index: 1;
            &:before,
            &:after {
              content: '';
              height: 100%;
              width: 100%;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
            }
            &:after {
              background-color: #0a5d6c;
              opacity: 0.53;
              z-index: 1;
            }
            &:before {
              content: '';
              height: 250px;
              width: 100%;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.63;
              background-image: linear-gradient(to bottom, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
              z-index: 2;
            }
          }
          .form-title {
            font-size: 44px;
            margin: 0;
            line-height: 49px;
            font-weight: bold;
            font-family: 'Work Sans', sans-serif;
            color: #fff;
            text-align: center;
          }
          .form-description-title {
            font-size: 16px;
            line-height: 26px;
            color: #fff;
            margin-bottom: 30px;
            text-align: center;
            p {
              margin: 0;
            }
          }
          .form-title-form {
            font-size: 20px;
            font-family: 'Work Sans', sans-serif;
            margin: 0;
            font-weight: 400;
            margin-bottom: 10px;
          }
          .create-acount-main {
            position: relative;
            z-index: 2;
            max-width: 500px;
            margin: auto;
            padding-top: 50px;
          }
          .input-acount-item {
            margin-bottom: 10px;
          }
          .form-list-inner {
            padding: 32px 40px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
          }

          .acount-terms {
            margin: 15px 0;
            font-size: 13px;
            a {
              margin-left: 5px;
              color: #64b65a;
              text-decoration: underline;
              &:hover {
                font-weight: 600;
              }
            }
            p {
              margin: 0;
            }
          }

          .wrap-success-acount {
            position: relative;
            width: 1024px;
            height: 595px;
          }
          .formulary-success {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
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
            max-width: 530px;
            text-align: center;
            color: #fff;
          }
          .success-btn {
            justify-content: center;
            margin-top: 65px;
          }
        `}
      </style>
    </div>
  );
}
export default FormCreateAcount;
