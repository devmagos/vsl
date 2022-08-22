import React from "react";
import "./Signup.css";

const SignupForm = () => {
  
  return (
   
    <div class="row g-0 col-md-12 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                  <div class="row g-0 col-md-12 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static form-section m-5 border shadow-sm rounded">
                      <h5 class="mb-3">WANT TO INSTRUCT US FOR YOUR LEGAL MATTER? REQUEST A FIXED FEE QUOTE</h5>
                      <form id="fs-frm" name="registration-form" accept-charset="utf-8" action="https://formspree.io/f/moqbqggn" method="post">
                          <fieldset class="inputs">
                            <input type="text" name="firstname" id="firstname" placeholder="* First Name" required="required" />
                              <input type="tel" name="phone" id="phone" placeholder="* Your phone number" required="required" />
                            </fieldset> 
                            <fieldset class="inputs">
                            <input type="email" name="email" id="email" placeholder="* Your email" required="required" />
                              <input type="email" name="confirmEmail" id="confirmEmail" placeholder="* Confirm your email" required="" />
                            </fieldset>
                            <fieldset class="select">
                              <select name="select" required="required">
                            <option selected>--Select service</option>
                                <option>Uk Visa and Immigration</option>
                                <option>Divorce / Family Law</option>
                                <option>Other</option>
                              </select>
                            </fieldset>
                            <textarea rows="3" name="message" id="message" required="required"></textarea>
                            <fieldset class="submit">
                                <input type="submit" value="Submit Request" class="bcolor" />
                            </fieldset>
                        </form>
                  
                  </div>
                  </div>
                  </div>
  );
};

export default SignupForm;