import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Formik, Field, ErrorMessage } from 'formik';
import { signupFormSchema } from '../../Schemas'

const SignupForm = () => {
   /* Server State Handling */
   const [serverState, setServerState] = useState();
   const handleServerResponse = (ok, msg) => {
     setServerState({ok, msg});
   };

   const handleOnSubmit = (values, actions) => {
     axios({
       method: "POST",
       url: "https://formspree.io/f/moqbqggn",
       data: values
     })
       .then(response => {
         actions.setSubmitting(false);
         actions.resetForm();
         handleServerResponse(true, "Thanks!");
       })
       .catch(error => {
         actions.setSubmitting(false);
         handleServerResponse(false, error.response.data.error);
       });
      }
  return (
   
    <div class="row g-0 col-md-12 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                  <div class="row g-0 col-md-12 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static form-section m-5 border shadow-sm rounded">
                      <h5 class="mb-3">WANT TO INSTRUCT US FOR YOUR LEGAL MATTER? REQUEST A FIXED FEE QUOTE</h5>
                      <Formik
                          initialValues = {{
                            firstName: "",
                            phone: "",
                            email: "",
                            confirmEmail: "",
                            select: "",
                            textarea: "",
                          }}
                          onSubmit={handleOnSubmit}
                          validationSchema={signupFormSchema}
                        >
                          {({ isSubmitting }) => (
                      <form class="row g-3 col-md-12" autoComplete="off" noValidate>
                        <div class="col-md-6">
                        <Field id="firstName" type="text" name="firstName" />
                          {/* <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} type="text" class="form-control" id="firstName" name="firstName" placeholder="* Your name" /> */}
                          <ErrorMessage name="email" className="errorMsg" component="p" />
                        </div>
                        <div class="col-md-6">
                        <Field id="phone" type="number" name="phone" />
                          {/* <input value={values.phone} onChange={handleChange} onBlur={handleBlur} type="number" class="form-control" id="phone" name="phone" placeholder="* Phone (Required)" /> */}
                          <ErrorMessage name="email" className="errorMsg" component="p" />
                        </div>
                        <div class="col-md-6">
                        <Field id="email" type="email" name="email" />
                          {/* <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" class="form-control" id="email" name="email" placeholder="* Email address" /> */}
                          <ErrorMessage name="email" className="errorMsg" component="p" />
                          

                          </div>
                          <div class="col-md-6">
                          <Field id="confirmEmail" type="email" name="confirmEmail" />
                          {/* <input value={values.confirmEmail} onChange={handleChange} onBlur={handleBlur}  type="email" class="form-control" id="confirmEmail" name="confirmEmail" placeholder="* Confirm email address" /> */}
                          <ErrorMessage name="email" className="errorMsg" component="p" />
                          

                          </div>
                        <div class="col-12">
                        <label for="select" class="form-label">State</label>
                        <Field id="message" name="message" component="select" />
                          {/* <select value={values.select} onChange={handleChange} onBlur={handleBlur} id="select" name="select" class="form-select"> */}
                            <option selected>--Select service</option>
                            <option>Uk Visa and Immigration</option>
                            <option>Divorce / Family Law</option>
                            <option>Other</option>
                          {/* </select> */}
                          <ErrorMessage name="select" className="errorMsg" component="p" />


                        </div>
                        
                        <div class="col-md-12">
                            <label for="textarea" class="form-label">Example textarea</label>
                            <Field id="message" name="message" component="textarea" />
                            {/* <textarea value={values.textarea} onChange={handleChange} onBlur={handleBlur} id="textarea" name="textarea" rows="3"></textarea> */}
                            <ErrorMessage name="textarea" className="errorMsg" component="p" />
                          

                        </div>
                        
                        <div class="col-12">
                          <button disabled={isSubmitting} type="submit" class="btn text-light bcolor p-3">Submit Request</button>
                          {serverState && (
                            <p className={!serverState.ok ? "errorMsg" : ""}>
                              {serverState.msg}
                            </p>
                          )}
                        </div>
                      </form>
                  )}
          </Formik>
                  </div>
                  </div>
                  </div>
  );
};

export default SignupForm;