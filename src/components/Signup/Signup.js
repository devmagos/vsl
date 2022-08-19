import React from "react";
// import ReactDOM from "react-dom";
import "./Signup.css";

const SignupForm = () => {

  return (
    <div class="row g-0 border col-md-12 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="row g-0 col-md-12 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h5 class="mb-0">WANT TO INSTRUCT US FOR YOUR LEGAL MATTER? REQUEST A FIXED FEE QUOTE</h5>
                      <form class="row g-3 col-md-12">
                        <div class="col-md-6">
                          <input type="email" class="form-control" id="inputEmail4" placeholder="* Your name" />
                        </div>
                        <div class="col-md-6">
                          <input type="password" class="form-control" id="inputPassword4" placeholder="* Phone (Required)" />
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" id="inputEmail4" placeholder="* Email address" />
                          </div>
                          <div class="col-md-6">
                            <input type="password" class="form-control" id="inputPassword4" placeholder="* Confirm email address" />
                          </div>
                        <div class="col-12">
                        <label for="inputState" class="form-label">State</label>
                          <select id="inputState" class="form-select">
                            <option selected>--Select service</option>
                            <option>Uk Visa and Immigration</option>
                            <option>Divorce / Family Law</option>
                            <option>Other</option>
                          </select>
                        </div>
                        
                        <div class="col-md-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        
                        <div class="col-12">
                          <button type="submit" class="btn text-light bcolor p-3">Submit Request</button>
                        </div>
                      </form>
                  </div>
                  </div>
                </div>
  );
};

export default SignupForm;