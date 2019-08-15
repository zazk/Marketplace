import React, { useState } from 'react';
import { Auth0Lock } from 'auth0-lock';
import ModalBox from '../../features/ModalBox';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';
import {
  AccountBanner,
  CreateAcountTitle,
  FormTitle,
  FormDescriptionTitle,
  FormTitleForm,
  FormListInner,
  CreateAcountMain,
  WrapSuccessAcount,
  InputAcountItem,
  CreateAcount,
} from './style';

function FormLogin({ user, url }) {
  const emailUser = 'email@mail.com';
  const [isFill, setFill] = useState(false);
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };

  function submitRequest(data) {
    fetch('/api/requestAccess', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      // res.status === 200;
    });
  }
  const lock = new Auth0Lock('sfj8nlpFONfJanArPrB8PpcB0E9FU4UI', 'marketplace-pachama.auth0.com');
  const openLogin = () => {
    lock.show();
  };

  return (
    <CreateAcount className="formulary">
      <AccountBanner style={{ backgroundImage: `url(/static/assets/images/banner-create-acount.jpg)` }} />
      <CreateAcountMain>
        <CreateAcountTitle>
          <FormTitle>Log In Pachama</FormTitle>
          <FormDescriptionTitle>
            <p>Login to view your projects</p>
          </FormDescriptionTitle>
        </CreateAcountTitle>
        <FormListInner>
          <FormTitleForm>Your Account</FormTitleForm>
          <span onClick={() => openLogin()}>Open Popup Login Default</span>
          <Formik
            initialValues={{
              name: '',
              companyname: '',
              email: '',
              phonenumber: '',
            }}
            validate={values => {
              if (values.email && values.phonenumber) {
                setFill(true);
              }
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.companyname) {
                errors.companyname = 'Required';
              }
              if (!values.email) {
                errors.email = 'Required';
              }
              if (!values.phonenumber) {
                errors.phonenumber = 'Required';
              }
              if (Object.keys(errors).length > 0) return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                submitRequest(values);
                //alert(JSON.stringify(values, null, 2));
                toggle();
              }, 500);
            }}
            render={({ submitForm, isSubmitting, values, setFieldValue }) => (
              <Form>
                <InputAcountItem>
                  <Field fullWidth name="email" type="email" label="Email" component={TextField} />
                </InputAcountItem>
                <InputAcountItem>
                  <Field fullWidth name="name" type="text" label="Password" component={TextField} />
                </InputAcountItem>

                {isSubmitting && <LinearProgress />}
                <div className="form-btn">
                  <button
                    className="btn btn-send"
                    type="submit"
                    disabled={!isFill || isSubmitting}
                    onClick={() => submitForm}
                  >
                    <span>Log In</span>
                  </button>
                </div>
              </Form>
            )}
          />
        </FormListInner>
      </CreateAcountMain>

      <ModalBox isOpen={openLightbox} toggle={toggle} url={url}>
        <WrapSuccessAcount>
          <div className="formulary-success flex active">
            <div className="success-content">
              <figure>
                <img src="/static/iconos/icon-success.svg" width="80" alt="" />
              </figure>
              <h3 className="success-title">Your access request was submitted</h3>
              <div className="success-description">
                <p>We will send you an email with the confirmation.</p>
              </div>
            </div>
          </div>
        </WrapSuccessAcount>
      </ModalBox>
    </CreateAcount>
  );
}
FormLogin.propTypes = {
  user: PropTypes.object,
  url: PropTypes.string.isRequired,
};
export default FormLogin;
