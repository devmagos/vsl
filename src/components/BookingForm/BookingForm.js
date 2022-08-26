import React from 'react'
import "./BookingForm.css"

function BookingForm() {
  return (
                    <div class="container-fluid">
                      <h4>Book An Appointment Online</h4>
                      <h5>You can book an appointment online using the appointment booking form below: </h5>
                      <form id="" class="form border rounded shadow-sm" name="booking" accept-charset="utf-8" action="https://formspree.io/f/moqbqggn" method="post">
                      <h2 class="">Booking Form</h2>
                            <fieldset class="fields">
                            <fieldset name="select-service" className="select" required="required">
                              <label for='select'>Select service</label>
                              <select name="select-service" className="service-field" required="required">
                                <option>Uk Visas and Immigration</option>
                                <option>Divorce and Family Law</option>
                                <option>Document checking</option>
                              </select>
                            </fieldset>
                              
                            <fieldset name="select-sub-service" className="select" required="required">
                              <label for='select'>Select sub service</label>
                              <select name="select" class="sub-service-field" required="required">
                                <option>Uk Visa and Immigration</option>
                                <option>Divorce / Family Law</option>
                                <option>Other</option>
                              </select>
                            </fieldset>
                            </fieldset>

                            <fieldset class="fields">
                            <fieldset name="preferred-location" className="select" required="required">
                              <label for='preferred-location'>Preferred location</label>
                              <select name="preferred-location" className="location-field" required="required">
                                <option>Zoom (online)</option>
                                <option>Teams (online)</option>
                                <option>Phone (phone call)</option>
                                <option>London office (In-person)</option>
                              </select>
                            </fieldset>
                              
                            <fieldset name="select-your-country" className="select" required="required">
                              <label for='select-your-country'>Select your Country</label>
                              <select name="select-your-country" class="select" className="country-field"  required="required">
                                <option>United Kingdom</option>
                              </select>
                            </fieldset>
                            </fieldset>

                            <fieldset class="fields">
                            <fieldset name="email" className="select" required="required">
                            <label for='email'>Email</label>
                            <input type="email" name="email" className='email-field' id="email" required="required" />
                            </fieldset>

                            <fieldset name="phone" className="select" required="required">
                            <label for='phone' className='phone'>Phone</label>
                            <input type="tel" name="phone" className='phone-field' id="phone" required="required" />
                            </fieldset>
                            </fieldset>

                            <fieldset name='message' className='textarea'>
                            <label for='message'>Describe your matter</label>
                            <textarea rows="3" name="message" id="message" required="required"></textarea>
                            </fieldset>

                            <fieldset name="calendar" className="calendar">
                            <label for='calendar'>Select Date</label>
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&src=dnNsZW1haWx0ZXN0QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ODA1ZXZhbzYzMDJmajc0dG5vbG4wYWR1NmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4ubmcjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%23009688&color=%230B8043" style={{'border': 'solid 1px #777'}} width="400" height="300" frameborder="0" scrolling="no" name="calendar" title='Book a meeting with victoria solicitors'></iframe>
                            </fieldset>

                            <fieldset name="select" className="select">
                                <input type="submit" value="Submit Request" class="bcolor" required="required" />
                            </fieldset>
                        </form>
                  </div>
  );
};

export default BookingForm;

