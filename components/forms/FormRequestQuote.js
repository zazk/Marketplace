import React, { useState } from 'react';
import ModalBox from '../features/ModalBox';
import PropTypes from 'prop-types';
import { Mixpanel } from '../../utils/mixpanel';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';

const volumenoptions = [
  {
    value: 'none',
    label: "I don't know",
  },
  {
    value: '1-100',
    label: '1 to 100',
  },
  {
    value: '100-1,000',
    label: '100 to 1,000',
  },
  {
    value: '1,000-10,000',
    label: '1,000-10,000',
  },
  {
    value: '10,000-100,000',
    label: '10,000-100,000',
  },
  {
    value: 'More than 100,000',
    label: 'More than 100,000',
  },
];

const ranges = [
  {
    value: 'none',
    label: 'I don`t know',
  },
  {
    value: '$1-$1,000',
    label: '$1-$1,000',
  },
  {
    value: '$1000-$10,000',
    label: '$1000-$10,000',
  },
  {
    value: '$10,000-$100,000',
    label: '$10,000-$100,000',
  },
  {
    value: '$100,000-$1,000,000',
    label: '$100,000-$1,000,000',
  },
  {
    value: 'More than $1,000,000',
    label: 'More than $1,000,000',
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
  const emailUser = user ? user.emails[0].value : 'email@mail.com';
  const [showSuccessMessage, setSuccessMessage] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);
  const [isFill, setFill] = useState(false);
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

  function submitRequest(data) {
    fetch('/api/requestQuote', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      res.status === 200;
    });
  }

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
                  <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/dsaezgil">
                    <span>Schedule a Call</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="formulary-main flex">
            <div className="form-title-section">
              <div className="form-title-inner">
                <h3 className="form-title">Go Carbon Neutral</h3>
                <div className="form-description-title">
                  <p>
                    Our team will help you navigate the process from calculating your carbon footprint to choosing the
                    right projects for your company. Leave your information and we'll reach out to you shortly.
                  </p>
                </div>
              </div>
            </div>

            <div className="form-list-inputs">
              <div className="form-list-inner">
                <Formik
                  initialValues={{
                    name: '',
                    companyname: '',
                    email: emailUser,
                    phonenumber: '',
                    selectvolumen: 'none',
                    selectbudget: 'none',
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
                          className="btn btn-send"
                          type="submit"
                          disabled={!isFill || isSubmitting}
                          onClick={() => (trackRequestQuote('Submit'), submitForm)}
                        >
                          <span>Request quote</span>
                        </button>
                      </div>
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
            @media screen and (max-width: 1024px) {
              width: 95vw;
            }
            @media screen and (max-width: 745px) {
              width: 100vw;
              height: 100vh;
              overflow: auto;
            }
          }
          .formulary-main {
            position: relative;
            z-index: 1;
            @media screen and (max-width: 745px) {
              .form-title-section,
              .form-list-inputs {
                width: 100%;
                box-sizing: border-box;
              }
            }
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
            @media screen and (max-width: 745px) {
              position: fixed;
            }
          }
          .success-title {
            font-size: 44px;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 10px;
            line-height: 49px;
            font-family: 'Work Sans', sans-serif;
            @media screen and (max-width: 640px) {
              font-size: 28px;
              line-height: 100%;
              padding-left: 30px;
              padding-right: 30px;
            }
          }
          .success-description {
            p {
              margin: 0;
              font-size: 16px;
              line-height: 26px;
            }
            @media screen and (max-width: 640px) {
              padding-left: 30px;
              padding-right: 30px;
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
            @media screen and (max-width: 480px) {
              padding-left: 30px;
              padding-right: 30px;
              .btn {
                width: 100%;
              }
            }
          }
          .two-input {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            flex-flow: row wrap;
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
            @media screen and (max-width: 1024px) {
              padding-left: 30px;
              padding-right: 30px;
              .form-title {
                font-size: 32px;
              }
            }
            @media screen and (max-width: 745px) {
              padding: 30px;
              min-height: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              .form-title-inner {
                max-width: none;
              }
              .form-title {
                margin: 0;
              }
              .form-description-title p {
                margin: 0;
              }
            }
            @media screen and (max-width: 480px) {
              .form-title {
                font-size: 26px;
              }
              .form-description-title {
                font-size: 14px;
                line-height: 18px;
              }
            }
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
            @media screen and (max-width: 1024px) {
              padding-left: 30px;
              padding-right: 30px;
            }
            @media screen and (max-width: 745px) {
              padding-left: 30px;
              padding-right: 30px;
              padding-top: 30px;
              padding-bottom: 30px;
            }
            @media screen and (max-width: 640px) {
              background-color: #fafafa;
              padding-left: 15px;
              padding-right: 15px;
            }
          }
          .form-list-inner {
            max-width: 550px;
            @media screen and (max-width: 745px) {
              max-width: none;
            }
          }
          .btn-send {
            &[disabled] {
              cursor: default;
              background-color: #d8d8d8;
              color: rgba(255, 255, 255, 0.74);
              &:after,
              &:before {
                display: none;
              }
            }
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
FormRequesQuote.propTypes = {
  user: PropTypes.object,
};
export default FormRequesQuote;
