import React, { useState } from 'react';
import ModalBox from '../features/ModalBox';
import Button from '@material-ui/core/Button';
import { Mixpanel } from '../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';

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
  function trackRequestQuote(status) {
    if (user) {
      Mixpanel.identify(user.id);
    }
    var event = status + ' Request Quote';
    Mixpanel.track(event);
  }
  trackRequestQuote('Filling');

  return (
    <div>
      <button type="button" className="btn" onClick={toggle}>
        <span>Request quote</span>
      </button>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <div className="formulary">
          <div className={`formulary-success flex ${showSuccessMessage === 1 && 'active'}`}>
            <div className="success-content">
              <figure>
                <img src="/static/iconos/icon-success.svg" width="80" alt="" />
              </figure>
              <h3 className="success-title">Thank you for submiting!</h3>
              <div className="success-description">
                <p>We are reviewing your information.</p>
                <p>Meanwhile you can make a reservation to have a call.</p>
              </div>
              <div className="success-btn flex">
                <button className="btn white" onClick={() => setSuccessMessage(0)}>
                  <span>Book call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="formulary-main flex">
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
                      alert(JSON.stringify(values, null, 2));
                      setSuccessMessage(1);
                    }, 500);
                  }}
                  render={({ submitForm, isSubmitting, values, setFieldValue }) => (
                    <Form>
                      <div className="two-input">
                        <div className="input-item">
                          <Field name="name" type="text" label="Name" component={TextField} />
                        </div>
                        <div className="input-item">
                          <Field name="companyname" type="text" label="Company name" component={TextField} />
                        </div>
                      </div>
                      <div className="two-input">
                        <div className="input-item">
                          <Field name="email" type="email" label="Email" component={UppercasingTextField} />
                        </div>
                        <div className="input-item">
                          <Field name="phonenumber" type="text" label="Phone Number" component={TextField} />
                        </div>
                      </div>
                      <div className="two-input">
                        <div className="input-item info">
                          <div className="form-info get-tooltip">
                            <img src="/static/iconos/icon-info2.svg" width="14" />
                            <div className="wrap-tooltip">
                              <div className="tooltip-inner">
                                <p>These numbers are equivalent to Tons.</p>
                              </div>
                            </div>
                          </div>
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
                      </div>

                      <Field
                        name="message"
                        label="Would you like to leave a comment?"
                        multiline
                        rows="4"
                        className="field-type-textarea"
                        component={TextField}
                      />

                      {isSubmitting && <LinearProgress />}
                      <div className="form-btn">
                        <button
                          className="btn"
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => (trackRequestQuote('Submit'), submitForm)}
                        >
                          <span>Request quote</span>
                        </button>
                      </div>
                      {/* <Button variant="raised" color="primary" disabled={isSubmitting} onClick={submitForm}>
                                  Submit
                                </Button> */}
                    </Form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalBox>

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
    </div>
  );
}
export default FormRequesQuote;
