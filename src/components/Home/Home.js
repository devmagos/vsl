import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../Signup/Signup';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import Carlysia from '../images/carlysia.png'
import Micki from '../images/micki.png'
import Julian from '../images/julian.png'
import Emily from '../images/emily.png'



function Home() {
  return (
  <div className='home'>
    <Header />
      <Navbar />
      {/* Form page section below */}
    <Container>
      <Row className='form-solicitors'>
                <Col md="6" className="row g-0 p-5 rounded overflow-hidden flex-md-row mb-4 h-125 position-relative">
                  <div class="row g-0 p-5 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <Col p="5 d-flex flex-column position-static">
                      <h3 class="m-3">Immigration Solicitors In London</h3>
                      <p class="card-text m-2 p-3 line-height-3">
                      Our London based firm of immigration solicitors has 
                      one of the best team of immigration lawyers to provide 
                      specialist UK visa and immigration services.
                      </p>
                      <div class="m-2">
                        <button class="btn p-3 text-light bg-success btn-sm" type="button">Contact Us</button>
                        <button class="btn p-3 m-2 text-light bg-success btn-sm" type="button">Book an Appointment</button>
                      </div>
                    </Col>
                  </div>
                </Col>

              <Col md="6">
                  <SignupForm />
              </Col>
      </Row>

      <Row>
        <Col md="9">
          <div className="side-text">
          <div>
              <h4>Immigration Solicitors In London</h4>
              <p>
              As specialist immigration lawyers in London, we provide expert 
              immigration advice and legal representations concerning all types 
              of UK visa and immigration matters including Family Visa UK and Work 
              Visa UK. Being based in South Wimbledon, London, only 30 seconds walk 
              from South Wimbledon Underground Station, our top immigration lawyers 
              re easily accessible and able to meet with you. Our highly qualified 
              and experienced immigration lawyers in London have wealth of legal 
              knowledge and good track record of successfully helping thousands of 
              clients with their immigration cases. We can legally represent you in 
              your immigration application, immigration appeal, Administrative Review, 
              Pre Action Protocol (PAP) or immigration Judicial Review (JR) on fixed 
              fee basis with flexible payment terms allowing you to pay our fixed fees 
              in instalments.
              </p>

              <blockquote className='side-block-text'>
              Our specialist team of solicitors and lawyers can provide you with expert 
              legal advice and representations remotely from our offices in London & 
              Manchester. Using modern technology, we can handle your matter remotely 
              without the need for you to visit our offices. Whilst we are more than 
              happy to welcome clients into our offices, if this is their preference, 
              we are proud to be able to offer our legal services remotely.
              </blockquote>

              <p>
              As one of the best immigration solicitors in London, Sunrise Solicitors 
              are authorised and regulated by the Solicitors Regulation Authority (SRA), 
              meaning our best team of immigration solicitors in London maintain the 
              highest possible standards in all aspects of our immigration legal services. 
              We will leave no stone unturned in achieving success in your immigration 
              application to the Home Office UKVI or in challenging the refusal of your 
              immigration application successfully. Our leading immigration lawyers very 
              well know the importance of documentary evidence and strong legal 
              representations when preparing an immigration application, immigration 
              appeal, Administrative Review or immigration Judicial Review.
              </p>

              <p>
              As one of the top rated immigration law firm in London, we get large part 
              of our clientele through recommendations from our current and previous 
              clients who happily recommend our immigration services to others based on 
              the best immigration services they received from our leading immigration 
              lawyers in their immigration matters.
              </p>

              <p>
              The quality of our immigration services is self-evident from the reviews 
              of our clients about the immigration advice services provided by our 
              expert immigration solicitors.
              </p>
              </div>


              <div>
                <h4>Our London Immigration Lawyers Can Help You Worldwide, Wherever You Are!</h4>
                <p>
                Our highly reputed and experienced London based immigration lawyers can provide 
                specialist immigration advice and legal representations for your immigration matter 
                regardless of where you are in the world. Using the latest means of communications, 
                we can provide fast, friendly and reliable immigration advice and representations 
                for your immigration matter even if you are outside the UK.
                </p>

                <p>Our London immigration lawyers can carry out all the work on your immigration 
                  matter remotely without any need for you to attend our office physically. Our 
                  remote service in relation to your immigration matter can entail the following:
                </p>
                <ul>
                  <li>
                  We assess your eligibility in an initial immigration advice and consultation 
                  session through Zoom meeting and quote you a fixed fee to handle your immigration 
                  matter. In your initial Zoom meeting, we advise you on all the requirements, 
                  documents, procedures and costs etc related to your immigration matter;
                  </li>

                  <li>
                  If you instruct us for your immigration matter after the initial immigration advice 
                  and consultation session, our immigration lawyers will email you the service agreement 
                  for you to digitally sign the same and return the same to our London office by email;
                  </li>

                  <li>
                  You email us all the supporting documents in PDF format to be submitted in support of 
                  your immigration matter;
                  </li>

                  <li>
                  We assess your supporting documents and give our opinion on the same;
                  </li>

                  <li>
                  Our immigration lawyers then complete the application form online in a Zoom meeting 
                  by sharing our screen with you;
                  </li>

                  <li>
                  We submit your immigration application online and also help you pay the application 
                  fee online;
                  </li>

                  <li>
                  Where necessary, we prepare a detailed personal statement to be submitted in support 
                  of the immigration application in a Zoom meeting by sharing our screen with you;
                  </li>

                  <li>
                  We prepare a detailed cover letter, listing all the documents and setting out all the 
                  legal representations, in support of your immigration application;
                  </li>

                  <li>
                  We upload all the supporting documents online to be considered in support of the 
                  immigration application;
                  </li>

                  <li>
                  We carry out all the follow up work on your immigration application until a decision 
                  is made by the Home Office UKVI on your immigration application.
                  </li>
                </ul>
              </div>

              <div>
                <h4>Free Immigration Advice Online</h4>
                <p>
                Our expert team of free immigration advice solicitors in London, can provide fast, 
                friendly and reliable free general immigration advice online through our online enquiry 
                form and Live Chat. Ask a question to our free immigration advice solicitors concerning 
                your UK visa and immigration matter. Our free immigration advice solicitors will aim to 
                respond to your free immigration advice enquiry within 24 hours of receiving your free 
                immigration advice enquiry.
                </p>

                <form>
                  <button>READ MORE</button>
                </form>

                <h4>Detailed Immigration Advice & Documents Checking Service</h4>
                <p>
                As specialist immigration and human rights lawyers in London and Manchester, our expert 
                team of immigration solicitors provide expert immigration advice service concerning all 
                UK immigration matters. The quality of our immigration services is self-evident from the 
                reviews of our clients about the service provided by our expert immigration solicitors.
                </p>

                <p>
                If you want detailed immigration advice entailing full assessment of your personal 
                circumstances, you can schedule an appointment for detailed immigration advice and 
                consultation session.
                </p>
              </div>

              <div>
              <Table bordered striped hover size='sm' responsive mt="5">
              <thead>
                <tr>
                  <th>Name Of Advisor/Solicitor</th>
                  <th>Consultation Fees</th>
                  <th>Appointment Booking</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Mr Amir Naviwala</td>
                <td>
                  <tr>
                  &#xa3; 100 for up to half an hour
                  </tr>
                  <tr>
                  &#xa3; 150 for up to an hour
                  </tr>
                </td>
                <td>
                  Click here to book an appointment
                </td>
              </tr>
              <tr>
                  <td>Mr Ashad Mahmood</td>
                <td>
                  <tr>
                  &#xa3; 150 for up to half an hour
                  </tr>
                  <tr>
                  &#xa3; 200 for up to an hour
                  </tr>
                </td>
                <td>
                  Click here to book an appointment
                </td>
              </tr>
              </tbody>
          </Table>
          </div>
          <div>
          <p>
          During the immigration consultation session, we will advise 
          you about the relevant immigration laws, procedures, requirements, 
          documents, etc after discussing the same with you in detail. Upon 
          thorough assessment of your personal circmstances, our immigration 
          lawyers in London will advise you about the chances of success in 
          your immigration case and the timescale for a decision to be reached 
          on your immigration matter. Your attention will be drawn to the 
          weaknesses and strengths of your immigration case so that the prospects 
          of success can be increased, if possible. Our experienced team of 
          immigration lawyers in London will address all the questions you may 
          have in relation to your immigration matter.
          </p>
          <blockquote className='side-block-text'>
          Our immigration solicitors will agree with you, upfront, the total 
          fixed fee required to handle your immigration case during the immigration 
          advice session and if you instruct us for your immigration matter within 
          2 weeks, your consultation fee will be taken off the fixed fee quoted to 
          handle your immigration case.
          </blockquote>
          </div>

          <div>
            <h4>Immigration Documents Checking Service</h4>
            <p>
            Our specialist team of immigration lawyers can assess the supporting 
            documents of your immigration application and advise you on the 
            weaknesses and strengths of your application. If you are considering 
            submitting an application to the Home Office, UKVI or filing a notice 
            of appeal to the First Tier Tribunal on your own, without being 
            represented by a legal representative, it is worth showing all your 
            documents to an immigration expert who can advise you on your case 
            documents. The immigration cases succeed and fail on the basis of 
            documents most of the time and therefore it is very important to know 
            whether or not the documents you are submitting in support of your 
            application or appeal are good enough for the application or the 
            appeal to succeed.
            </p>

            <Table bordered striped hover size='sm' responsive mt="5">
              <thead>
                <tr>
                  <th>Name Of Advisor/Solicitor</th>
                  <th>Consultation Fees</th>
                  <th>Appointment Booking</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Mr Amir Naviwala</td>
                <td>
                  &#xa3; 300 (VAT included, if applicable)
                </td>
                <td>
                  Click here to book an appointment
                </td>
              </tr>
              <tr>
                  <td>Mr Ashad Mahmood</td>
                <td>
                  &#xa3; 400 f(VAT included, if applicable)
                </td>
                <td>
                  Click here to book an appointment
                </td>
              </tr>
              </tbody>
          </Table>
          </div>
          
          <div>
          <h4>Free UK Visa Refusal Assessment</h4>
          <p>
          As part of our free immigration advice service, our expert 
          team of free immigration solicitors in London can carry out 
          free assessment of UKVI refusal decisions of your immigration 
          application by the Home Office, UKVI. If your immigration 
          application has been refused by the Home Office, UKVI and 
          you believe the refusal decision is unlawful and not in 
          according with the UK immigration rules, you can scan and 
          email your refusal letter to us on 
          enquiries@sunrisesolicitors.co.uk and we can do free 
          assessment of refusal decision.
          </p>

          <p>
          Upon assessment of UK visa refusal, our expert immigration 
          solicitors in London will be able to advise you whether or 
          not there are good grounds for challenging the refusal decision.
          </p>
          </div>

          <div>
            <h4>Specialist Help and Support In Your Journey To ILR and British Citizenship</h4>
            <p>
            As specialist immigration solicitors in London, we can provide 
            high quality UK immigration services for all stages and all 
            types of UK visa and immigration applications. Our top rated 
            immigration lawyers' team can help you with all stages of your 
            UK visa and immigration applications starting from coming to 
            the UK by applying for UK visa entry clearance, switching visas 
            from one category to another from inside the UK, renewal or 
            extension of your UK visa from inside the UK, applying for 
            Indefinite Leave to Remain (ILR), to becoming a British Citizen 
            by applying for Naturalisation as a British Citizen and applying 
            for first British passport.
            </p>
            <p>
            The various stages of UK immigration applications for which our 
            top team of immigration solicitors can provide expert immigration 
            advice and legal representations include the following:
            </p>
            <Row>
              <Row>
                <Col>
                  <div className='links'><p>UK Visa Entry Clearance Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching Visas Within UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>UK Visa Extension/Renewal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>British Citizenship Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Right Of Abode UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md='6'>
                  <div className='links'><p>British Passport Application</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
            </Row>
            <div>
              <h4>Immigration Advice & Representations For UK Visa and Immigration Applications</h4>
              <p>
              Our best team of London based immigration lawyers deal with all types of UK visa and 
              immigration applications. Our experienced immigration lawyers can fully prepare your 
              UK visa and immigration application and submit your application to the Home Office, 
              UKVI along with all the supporting docuemnts and detailed cover letter drafted by our 
              best team of immigration lawyers in London.
              </p>

              <p>
              Various UK visa categories for which our specialist team of immigration lawyers can 
              provide expert immigration advice and legal representations are as follows:
              </p>

              <Row>
                <Col>
                  <div className='links'><p>Family Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>UK Work Visas</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Sponsor License</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Long Residence Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Private Life Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Discretionary Leave Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Visitor Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>EU Settlement Scheme (EUSS)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Study Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>British Citizenship</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>British Paasport applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Members Of Armed Forces</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Asylum & Humanitarian Protecton</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Immigration Bail Application</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Travel Documents & Certificates Of Travel</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Deportation From The UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Stateless Person & Their Family Members</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Other Immigration Applications</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <div>
                <h4>Super Priority Service (Decision Within 24 Hours)</h4>

                <p>
                As one of the best immigration lawyers in London, we are 
                registered with the Home Office, UK Visas & Immigration 
                (UKVI) and its commercial partners UKVCAS Sopra Steria 
                to provide Super Priority Service (SPS) for your 
                immigration application whereby decision on your 
                immigration application will be made by the Home Office, 
                UKVI within 24 hours of the enrolment of your biometrics.
                </p>

                <p>
                Our immigration solicitors in London can prepare and 
                submit your immigration application to the Home Office, 
                UKVI through Super Priority Service (SPS) and get a 
                decision on your immigration application within 24 
                hours under the fast track service. This way, you will 
                not have to wait for the decision on your immigration 
                application for months (sometimes years).
                </p>

                <Button>READ MORE</Button>
              </div>

              <div>
                <h4>Visa Chase Up Service UK</h4>
                <p>
                If you have made an immigration application to the Home 
                Office, UKVI and your immigration application has been 
                pending with the Home Office, UK Visas & Immigration 
                (UKVI) for more than 6 months, our top immigration team 
                of lawyers in London can chase up the Home Office, UKVI 
                and make legal representations to the Home Office, UKVI 
                for a quick decision to be made on the outstanding 
                immigration application. As a result of our legal 
                representations to the Home Office, UKVI, your 
                immigration application is likely to be decided 
                within 2 to 4 weeks.
                </p>
                <Button>READ MORE</Button>
              </div>

              <div>
                <h4>Challenging Home Office Refusal Decisions</h4>
                <p>
                You can legally challenge a decision of the Home Office, 
                UKVI, decision of the HM Passport Office or an appeal 
                decision if you disagree with the decision and there are 
                grounds for the decision to be challenged by one of the 
                available legal remedies. Home Office, UKVI immigration 
                decisions also known as refusal letters can normally be 
                challenged by way of UK Immigration Appeals, Administrative 
                Review (AR) , Pre-Action Protocol (PAP) For JR and Judicial 
                Reviews (JRs) In The Upper Tribunal (UT) or Judicial Reviews 
                (JRs) In High Court.
                </p>

                <p>
                As specialist immigration lawyers in London, we have very 
                good track record of successfully challenging the Home
                 Office, UKVI refusal decisions.  Our leading immigration 
                 lawyes in London can prepare very good grounds to legally 
                 challenge the Home Office UKVI refusal decisions.
                </p>

                <p>
                If your application to the Home Office, UKVI, Appeal to the 
                First Tier Tribunal (FTT) or Judicial Review (JR) has been 
                refused/dismissed, we can provide the required legal 
                representations in challenging the refusal of such 
                application/appeal/judicial review. We prvoide a vast 
                range of immigration services in challenging the refusal 
                of immigration applications. We also provide legal 
                representations to our clients in challenging the delay 
                on part of the Home Office UKVI in reaching a decision on 
                the immigration application where the applicant is prejudiced 
                by such delay.
                </p>

                <p>
                Various legal services provided by us for challenging the 
                Home Office UKVI refusal letters are as follows:
                </p>
              </div>

              <div>
              <Row>
                <Col>
                  <div className='links'><p>Free UK Visa Refusal Assessment</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Challenging Refusal / Or Revocation Of Sponsor License</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Challenging Removal from the UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Reconsideration Of Naturalisation / Nationality Application</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Challenging Refusal Of Visitor Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Immigration Appeals</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Administrative Review (AR)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Pre Action Protocol (PAP)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Immigration Judicial Review (JR)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Where Are Our Immigration Solicitors Based In London?</h4>

                <p>
                Our immigration lawyers team are based in South Wimbledon, 
                London, only 30 seconds walk from South Wimbledon Underground 
                Station. Our top rated immigration lawyers are easily 
                accessible and able to meet with you. Our location in London 
                is as in the map below:
                </p>
              </div>

              <div>
                <h4>UK Visa & Immigration News</h4>

                <p>
                The UK Immigration Rules, procedures, forms and fees are 
                frequently changing and therefore it is important to stay 
                up to date with all the UK visa and immigration news & updates. 
                Our expert team of UK visa and immigration lawyers try their 
                best to maintain this page to show all the recent UK visa and 
                immigration news & updates.
                </p>

                <Row>
                <Col md="6">
                  <div className='links'>
                    <p>
                      Support for family members of British nationals in Ukraine,
                      and Ukranian natioanals in Ukraine and the UK
                    </p>
                    <a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Our Team Of Leading Immigration Lawyers</h4>

                <p>
                As specialist immigration lawyers, we pride in having one of the 
                best team of specialist immigration solicitors and lawyers with 
                wealth of knowledge and experience to deal with all types of UK 
                visa and immigration matters. Our top rated immigration lawyers 
                have successfully helped thousands of clients with all types of 
                UK visa and immigration applications, immigration appeals, 
                Administrative Review, Pre-Action Protocol (PAP) and Judicial 
                Review (JR).
                </p>

                <p>
                Following are the leading immigration lawyers and solicitors 
                in our team of immigration lawyers:
                </p>
              </div>

              <div>
              <Row>
                <Col>
                  <div className='links'><p>Mr Arshad Mahmood (Specialist Immigration Solicitor)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Mr Amir Naviwala (Specialist Immigration Solicitor)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Mr Abdul Mutee (Specialist Immigration Solicitor)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Miss Victoria Gbenoba (Specialist Immigration Solicitor)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Book An Appointment Online</h4>

                <p>
                You can book an appointment online using the appointment booking form below: 
                </p>
              </div>

              {/* BOOKING FORM LOCATION HERE */}


              <div>
                <h4>FAQs - Immigration Solicitors London</h4>
                <Row>
                <Col>
                  <div className='links'>
                    <p>
                    How much does an immigration solicitor 
                    in London cost for helping with an immigration matter?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    Can immigration lawyers in London deal with my immigration 
                    case whilst I am abroad?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    Can immigration lawyers in London help me with challenging UK visa refusal?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    How can we help with your immigration application?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    Why choose us for handling your immigration matter?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    What languages are spoken by our team of immigration lawyers?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                     How can I find best immigration solicitors in London?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                      Immigration Solicitors London: Reviews
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                      Can immigration solicitors in London give free UK immigration advice?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    Can immigration solicitors in London work on my immigration case remotely 
                    without the need to attend their offices in London?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'>
                    <p>
                    Can immigration solicitors in London help me with my immigration case 
                    during coronavirus (COVID-19) outbreak?
                    </p>
                  <a href="#">
                    <i class="fa fa-download" style={{fontSize: '24px', color: 'green'}}></i>
                  </a></div>
                </Col>
              </Row>

              </div>

              <div className=''>
                <h4>What Our Clients Say About Us In Google Reviews?</h4>

                <Row>
                  {/* CARD REVIEWS SECTION */}
                          <div className="card-deck">
                          <div class="card">
                            <img src={Micki} class="card-img-top size" alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                          </div>

                          <div class="card">
                            <img src={Carlysia} class="card-img-top size" alt="" />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>

                            <div class="card">
                            <img src={Julian} class="card-img-top size" alt="" />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                          </div>

                          {/* CARD REVIEWS SECTION IS ABOVE */}
                </Row>

                    <Row>
                        <div class="container">           
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>Family Visa UK</th>
                                <th>Work Visa UK</th>
                                <th>ILR Applications</th>
                                <th>British Citizenship</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Spouse Visa UK (5 Years Route)</td>
                                <td>Skilled Worker Visa UK</td>
                                <td>ILR As a Spouse (5 Years Route)</td>
                                <td>Naturalisation As A British Citizen</td>
                              </tr>
                              <tr>
                                <td>Spouse Visa UK (10 Years Route)</td>
                                <td>Skilled Worker Sponsor License</td>
                                <td>ILR - 10 Years Long Residence</td>
                                <td>Registration As A British Citizen</td>
                              </tr>
                              <tr>
                                <td>Parent Of A British Child Visa UK</td>
                                <td>Hong Kong BNO Visa UK</td>
                                <td>ILR As A Slilled Worker</td>
                                <td>Registering A Child As A British Citizen</td>
                              </tr>
                              <tr>
                                <td>Adult Dependent Relative (ADR) Visa</td>
                                <td>Sole Representative Of An Overseas Business Visa</td>
                                <td>ILR As A Parent Of A British Child</td>
                                <td>Reconsideration Of Naturalisation Application</td>
                              </tr>
                              <tr>
                                <td>Children Of Settled Persons</td>
                                <td>UK Ancestry Visa</td>
                                <td>ILR As UK Ancestry Migrant</td>
                                <td>British Passport Application</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </Row>

                    {/* SECOND TABLE BELOW */}

                    <Row>
                <div class="container">           
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Challenging Refusal Decisions</th>
                        <th>Private Life and DL Applications</th>
                        <th>Deportation & Detention</th>
                        <th>Divorce / Family Law Services</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Immigration Appeals</td>
                        <td>20 Years Long Residence Application</td>
                        <td>Immigration Bail Application</td>
                        <td>Getting A Divorce</td>
                      </tr>
                      <tr>
                        <td>Administrative Review</td>
                        <td>7 Years Child Residence Route</td>
                        <td>Compensation - Immigration Detention</td>
                        <td>Annulment Of Marriage UK</td>
                      </tr>
                      <tr>
                        <td>Pre Action Protocol (PAP)</td>
                        <td>Over 18, Under 25 and Spent Half Of Life In The UK</td>
                        <td>Deportation Representations</td>
                        <td>Divorce Financial Settlement</td>
                      </tr>
                      <tr>
                        <td>Immigration Judicial Review</td>
                        <td>Very Significant Obstacles To</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </Row>
                        </div>
                        </div>

            </div>
          </div>
        </Col>

        {/* Side Table section Begins */}
        
        <Col md="3">
        <Table bordered striped hover size='sm' responsive mt="5">
          <thead>
            <tr>
              <th>Our Services</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>New Visa Routes/Schemes</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Family Visa Applications</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>EU Settlement Scheme (EUSS)</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>UK Work Visas</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Sponsor License</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Long Residence Applications</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Private Life Applications</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Discretionary Leave Applications</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>British Citezenship</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Study Visa UK</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Visitor Visa UK</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Other Immigration Applications</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Challenging Immigration Decisions</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
          <thead>
            <tr>
              <th>Our Immigration Lawyer's Team</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
              <td>Otto</td>
          </tr>
          <tr>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
          </tr>
          <tr>
              <td>Jacob</td>
          </tr>
          <tr>
              <td>Thornton</td>
          </tr>
          <tr>
              <td>@fat</td>
          </tr>
          </tbody>
        </Table>
            </Col>
      </Row>
      {/* Side Table Section Above */}

      {/* Footer section below */}

      <Footer />
    </Container>
      </div>
    );
  }
  
export default Home