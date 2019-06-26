import React, { useState } from 'react';
import Layout from '../components/layout';
import ModalBox from '../components/features/ModalBox';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress, MenuItem, FormControl, InputLabel, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';

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

function RequestQuote({ user }) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const toggle = () => {
    setOpenLightbox(!openLightbox);
  };
  const [isFill, setFill] = useState(false);

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
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  select: 'none',
                  tags: [],
                  rememberMe: true,
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                  }, 500);
                }}
                render={({ submitForm, isSubmitting, values, setFieldValue }) => (
                  <Form>
                    <div className="two-input">
                      <Field defaultValue="Default Value" name="name" type="text" label="Name" component={TextField} />
                      <Field name="companyname" type="text" label="Company name" component={TextField} />
                    </div>
                    <div className="two-input">
                      <Field name="email" type="email" label="Email" component={UppercasingTextField} />
                      <Field name="phonenumber" type="text" label="Phone Number" component={TextField} />
                    </div>
                    <div className="two-input">
                      <Field
                        type="text"
                        name="select"
                        label="Aproximate volumne"
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
                      <Field
                        type="text"
                        name="select"
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
                      <button className="btn" type="submit" disabled={isSubmitting} onClick={submitForm}>
                        <span>Request quote</span>
                      </button>
                    </div>
                    {/* <Button variant="raised" color="primary" disabled={isSubmitting} onClick={submitForm}>
                      Submit
                    </Button> */}
                  </Form>
                )}
              />

              {/* <div className="two-input">
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
              </div> */}
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
        `}
      </style>
    </Layout>
  );
}
export default RequestQuote;
