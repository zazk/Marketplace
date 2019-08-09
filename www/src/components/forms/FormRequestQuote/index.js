import React, { useState } from 'react';
import ModalBox from '../../features/ModalBox/index';
import PropTypes from 'prop-types';
// import { Mixpanel } from '../../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField } from 'formik-material-ui';
import {
  Formulary,
  FormularySuccess,
  FormularyMain,
  SuccessTitle,
  SuccessDescription,
  SuccessBtn,
  SuccessContent,
  FormListInputs,
  FormListInner,
  TwoInput,
  FormInfo,
  FormTitleSection,
  FormTitle,
  FormDescriptionTitle,
  FormBtn,
  FormTitleInner,
} from './style';

const volumenoptions = [
  {
    value: 'none',
    label: 'I don`t know',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const ranges = [
  {
    value: 'none',
    label: 'I don`t know',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
const UppercasingTextField = props => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      props.form.setFieldValue(props.field.name, value ? value.toUpperCase() : '');
    }}
  />
);

function FormRequesQuote({ user }) {
  const [showSuccessMessage, setSuccessMessage] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };

  // function trackRequestQuote(status) {
  //   if (user) {
  //     Mixpanel.identify(user.id);
  //   }
  //   var event = status + ' Request Quote';
  //   Mixpanel.track(event);
  // }
  // trackRequestQuote('Filling');

  function submitRequest(data) {
    fetch('/api/requestQuote', {
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
    <div>
      <button type="button" className="btn" onClick={toggle}>
        <span>Request quote</span>
      </button>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <Formulary className="formulary">
          <FormularySuccess className={`formulary-success flex ${showSuccessMessage === 1 && 'active'}`}>
            <SuccessContent>
              <figure>
                <img src="/static/iconos/icon-success.svg" width="80" alt="Success" />
              </figure>
              <SuccessTitle>Thank you for submiting!</SuccessTitle>
              <SuccessDescription>
                <p>We are reviewing your information.</p>
                <p>Meanwhile you can make a reservation to have a call.</p>
              </SuccessDescription>
              <SuccessBtn>
                <button className="btn white" onClick={() => setSuccessMessage(0)}>
                  <span>Book call</span>
                </button>
              </SuccessBtn>
            </SuccessContent>
          </FormularySuccess>
          <FormularyMain>
            <FormTitleSection>
              <FormTitleInner>
                <FormTitle>Request Carbon Credits</FormTitle>
                <FormDescriptionTitle>
                  <p>Here is going to be a text that explains users what happens after asking for the budget.</p>
                </FormDescriptionTitle>
              </FormTitleInner>
            </FormTitleSection>

            <FormListInputs>
              <FormListInner>
                <Formik
                  initialValues={{
                    name: 'Jhon Perez',
                    companyname: 'For Company ',
                    email: 'company@correo.com',
                    phonenumber: '123-123456',
                    selectvolumen: 'none',
                    selectbudget: 'none',
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      setSubmitting(false);
                      submitRequest(values);
                      setSuccessMessage(1);
                    }, 500);
                  }}
                  render={({ submitForm, isSubmitting, values, setFieldValue }) => (
                    <Form>
                      <TwoInput>
                        <div className="input-item">
                          <Field name="name" type="text" label="Name" component={TextField} />
                        </div>
                        <div className="input-item">
                          <Field name="companyname" type="text" label="Company name" component={TextField} />
                        </div>
                      </TwoInput>
                      <TwoInput>
                        <div className="input-item">
                          <Field name="email" type="email" label="Email" component={UppercasingTextField} />
                        </div>
                        <div className="input-item">
                          <Field name="phonenumber" type="text" label="Phone Number" component={TextField} />
                        </div>
                      </TwoInput>
                      <TwoInput>
                        <div className="input-item info">
                          <FormInfo className="get-tooltip">
                            <img src="/static/iconos/icon-info2.svg" width="14" alt="Info" />
                            <div className="wrap-tooltip">
                              <div className="tooltip-inner">
                                <p>These numbers are equivalent to Tons.</p>
                              </div>
                            </div>
                          </FormInfo>
                          <Field
                            id="volumen-select"
                            type="text"
                            name="selectvolumen"
                            label="Aproximate volumne"
                            select
                            component={TextField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          >
                            {volumenoptions.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Field>
                        </div>
                        <div className="input-item">
                          <Field
                            id="budget-select"
                            type="text"
                            name="selectbudget"
                            label="Aproximate budget"
                            select
                            component={TextField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          >
                            {ranges.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Field>
                        </div>
                      </TwoInput>

                      <Field
                        name="message"
                        label="Would you like to leave a comment?"
                        multiline
                        rows="4"
                        className="field-type-textarea"
                        component={TextField}
                      />

                      {isSubmitting && <LinearProgress />}
                      <FormBtn>
                        <button
                          className="btn"
                          type="submit"
                          disabled={isSubmitting}
                          // onClick={() => (trackRequestQuote('Submit'), submitForm)}
                          onClick={() => submitForm}
                        >
                          <span>Request quote</span>
                        </button>
                      </FormBtn>
                    </Form>
                  )}
                />
              </FormListInner>
            </FormListInputs>
          </FormularyMain>
        </Formulary>
      </ModalBox>
    </div>
  );
}
FormRequesQuote.propTypes = {
  user: PropTypes.object,
};
export default FormRequesQuote;
