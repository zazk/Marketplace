import React, { useState } from 'react';
import ModalBox from '../../features/ModalBox/index';
import PropTypes from 'prop-types';
// import { Mixpanel } from '../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';
import SuccessMessage from '../SuccessMessage';
import {
  CreateAcount,
  AcountBanner,
  FormTitle,
  FormDescriptionTitle,
  FormTitleForm,
  FormListInner,
  CreateAcountTitle,
  CreateAccountMain,
  AcountTerms,
  InputAcountItem,
} from './style';
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
  const [showSuccessMessage, setSuccessMessage] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
    // setSuccessMessage(0);
  };
  // function trackCreateAccount(status) {
  //   if (user) {
  //     Mixpanel.identify(user.id);
  //   }
  //   var event = status + ' Create Acount';
  //   Mixpanel.track(event);
  // }
  // trackCreateAccount('Filling');

  function submitRequest(data) {
    // data['userid'] = user.id;
    fetch('/api/createAccount', {
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

  return (
    <CreateAcount className="formulary">
      <AcountBanner style={{ backgroundImage: `url(/static/assets/images/banner-create-acount.jpg)` }} />
      <CreateAccountMain>
        <CreateAcountTitle>
          <FormTitle>Welcome to Pachama</FormTitle>
          <FormDescriptionTitle>
            <p>Create a Pachama account to acceed to our proyects.</p>
          </FormDescriptionTitle>
        </CreateAcountTitle>
        <FormListInner>
          <FormTitleForm>Create an account</FormTitleForm>
          <Formik
            initialValues={{
              email: emailUser,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                submitRequest(values);
                setSuccessMessage(1);
                //alert(JSON.stringify(values, null, 2));
                toggle();
              }, 500);
            }}
            render={({ submitForm, isSubmitting, values, setFieldValue }) => (
              <Form>
                <InputAcountItem>
                  <Field fullWidth name="email" type="email" label="Email" component={UppercasingTextField} />
                </InputAcountItem>
                <InputAcountItem>
                  <Field fullWidth name="name" type="text" label="Name" component={TextField} />
                </InputAcountItem>
                <InputAcountItem>
                  <Field fullWidth name="companyname" type="text" label="Company name" component={TextField} />
                </InputAcountItem>
                <InputAcountItem>
                  <Field fullWidth name="phonenumber" type="text" label="Phone Number" component={TextField} />
                </InputAcountItem>
                <AcountTerms>
                  <p>
                    By clicking this button, you agree to
                    <a href="">Pachama terms.</a>
                  </p>
                </AcountTerms>
                {isSubmitting && <LinearProgress />}
                <div className="form-btn">
                  <button
                    className="btn"
                    type="submit"
                    disabled={isSubmitting}
                    // onClick={() => (trackCreateAccount('Submit'), submitForm)}
                    onClick={() => submitForm}
                  >
                    <span>Create an account</span>
                  </button>
                </div>
              </Form>
            )}
          />
        </FormListInner>
      </CreateAccountMain>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <SuccessMessage isOpen={showSuccessMessage} toggle={toggle} type="isPopup" />
        {/* <div className="wrap-success-acount">
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
        </div> */}
      </ModalBox>
    </CreateAcount>
  );
}
FormCreateAcount.propTypes = {
  user: PropTypes.object,
  url: PropTypes.string.isRequired,
};
export default FormCreateAcount;
