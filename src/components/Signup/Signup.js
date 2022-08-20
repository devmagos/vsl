import React from "react";
import "./Signup.css";
import { useFormik } from 'formik';
import { signupFormSchema } from '../../Schemas'

const onSubmit = async (values, actions) => {
  console.log(values, actions, "successfully submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignupForm = () => {
  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, } = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      confirmEmail: "",
      select: "",
      textarea: "",
    },
    validationSchema: signupFormSchema,
    onSubmit,
  })

  console.log(errors);

  return (
    <div class="row g-0 col-md-12 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                  <div class="row g-0 col-md-12 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static form-section m-5 border shadow-sm rounded">
                      <h5 class="mb-3">WANT TO INSTRUCT US FOR YOUR LEGAL MATTER? REQUEST A FIXED FEE QUOTE</h5>
                      <form onSubmit={handleSubmit} class="row g-3 col-md-12" autoComplete="off">
                        <div class="col-md-6">
                          <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} className={errors.firstName && touched.firstName ? "input-error" : ""} type="text" class="form-control" id="firstName" name="firstName" placeholder="* Your name" />
                          {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div class="col-md-6">
                          <input value={values.phone} onChange={handleChange} onBlur={handleBlur} className={errors.phone && touched.phone ? "input-error" : ""} type="number" class="form-control" id="phone" name="phone" placeholder="* Phone (Required)" />
                          {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}

                        </div>
                        <div class="col-md-6">
                          <input value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} type="email" class="form-control" id="email" name="email" placeholder="* Email address" />
                          {errors.email && touched.email && <p className="error">{errors.email}</p>}

                          </div>
                          <div class="col-md-6">
                          <input value={values.confirmEmail} onChange={handleChange} onBlur={handleBlur} className={errors.confirmEmail && touched.confirmEmail ? "input-error" : ""} type="email" class="form-control" id="confirmEmail" name="confirmEmail" placeholder="* Confirm email address" />
                          {errors.confirmEmail && touched.confirmEmail && <p className="error">{errors.confirmEmail}</p>}

                          </div>
                        <div class="col-12">
                        <label for="select" class="form-label">State</label>
                          <select value={values.select} onChange={handleChange} onBlur={handleBlur} className={errors.select && touched.select ? "input-error" : ""} id="select" name="select" class="form-select">
                            <option selected>--Select service</option>
                            <option>Uk Visa and Immigration</option>
                            <option>Divorce / Family Law</option>
                            <option>Other</option>
                          </select>
                          {errors.select && touched.select && <p className="error">{errors.select}</p>}

                        </div>
                        
                        <div class="col-md-12">
                            <label for="textarea" class="form-label">Example textarea</label>
                            <textarea value={values.textarea} onChange={handleChange} onBlur={handleBlur} className={errors.textarea && touched.textarea ? "input-error" : ""} class="form-control" id="textarea" name="textarea" rows="3"></textarea>
                          {errors.textarea && touched.textarea && <p className="error">{errors.textarea}</p>}

                        </div>
                        
                        <div class="col-12">
                          <button disabled={isSubmitting} type="submit" class="btn text-light bcolor p-3">Submit Request</button>
                        </div>
                      </form>
                  </div>
                  </div>
                </div>
  );
};

export default SignupForm;