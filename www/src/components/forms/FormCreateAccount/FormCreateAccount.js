import React, { useState, useEffect } from 'react';
import ModalBox from '../../features/ModalBox/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField } from 'formik-material-ui';
import SuccessMessage from '../../features/SuccessMessage';
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
function FormCreateAcount({ defaultValues, submitRequestCreateAccount, userSaved, user }) {
  const [showSuccessMessage, setSuccessMessage] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(0);
  const [isError, setError] = useState(0);

  useEffect(() => {
    if (userSaved != null) {
      if (userSaved.username) {
        setOpenLightbox(1);
        setSuccessMessage(1);
      } else {
        setError(1);
        setOpenLightbox(1);
        setSuccessMessage(1);
      }
    }
  }, [userSaved]);

  function toggle(set) {
    setOpenLightbox(set);
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
            initialValues={defaultValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                submitRequestCreateAccount(values, user.accesstoken);
                setSubmitting(false);
              }, 500);
            }}
            render={({ submitForm, isSubmitting, values, setFieldValue }) => (
              <Form>
                <InputAcountItem>
                  <Field
                    fullWidth
                    name="email"
                    InputProps={{
                      disabled: true,
                    }}
                    type="email"
                    label="Email"
                    component={UppercasingTextField}
                  />
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
                    <Link to="#terminos">Pachama terms.</Link>
                  </p>
                </AcountTerms>
                {isSubmitting && <LinearProgress />}
                <div className="form-btn">
                  <button className="btn" type="submit" disabled={isSubmitting} onClick={() => submitForm}>
                    <span>Create an account</span>
                  </button>
                </div>
              </Form>
            )}
          />
        </FormListInner>
      </CreateAccountMain>

      <ModalBox isOpen={openLightbox} toggle={toggle} url={isError === 0 && '/list'}>
        <SuccessMessage error={isError === 1 && 'error'} isOpen={showSuccessMessage} toggle={toggle} type="isPopup" />
      </ModalBox>
    </CreateAcount>
  );
}
FormCreateAcount.propTypes = {
  user: PropTypes.object,
};
export default FormCreateAcount;
