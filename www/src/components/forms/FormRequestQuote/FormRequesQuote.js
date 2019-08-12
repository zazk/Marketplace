import React, { useState } from 'react';
import ModalBox from '../../features/ModalBox/index';
import PropTypes from 'prop-types';
// import { Mixpanel } from '../../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField } from 'formik-material-ui';
import SuccessMessage from '../SuccessMessage';
import {
  Formulary,
  FormularyMain,
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

const UppercasingTextField = props => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      props.form.setFieldValue(props.field.name, value ? value.toUpperCase() : '');
    }}
  />
);

function FormRequesQuote({ volumenoptions, ranges, defaultValues, submitRequest }) {
  const [showSuccessMessage, setSuccessMessage] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);

  const toggle = () => {
    setOpenLightbox(!openLightbox);
    setSuccessMessage(0);
  };
  // function trackRequestQuote(status) {
  //   if (user) {
  //     Mixpanel.identify(user.id);
  //   }
  //   var event = status + ' Request Quote';
  //   Mixpanel.track(event);
  // }
  // trackRequestQuote('Filling');

  return (
    <div>
      <button type="button" className="btn" onClick={toggle}>
        <span>Request quote</span>
      </button>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <Formulary className="formulary">
          <SuccessMessage isOpen={showSuccessMessage} toggle={toggle} />
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
                  initialValues={defaultValues}
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
