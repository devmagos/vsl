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
// import Emily from '../images/emily.png'



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
                      <h3 class="m-3">A Warm Welcome To Victoria Solicitors!</h3>
                      <p class="card-text m-2 p-3 line-height-3">
                      We are one of London’s Premier Family Law Firms with a 
                      unique family team of four that specialise in family, 
                      commercial and immigration law
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
              <p>We are one of London’s Premier Family Law Firms with a unique 
                family team of four that specialise in family, commercial and 
                immigration law.
              </p>
              <p>
              With a plethora of experience working with limited companies (SMEs) 
              and large corporations such as Shell, we are the go-to for 
              Anglo-African investments for companies looking to trade and invest 
              in Africa. Our team has specialist knowledge in the energy sector 
              (oil and gas).
              </p>

              <blockquote className='side-block-text'>
              In terms of commercial law, we support companies through the whole 
              legal process from strategy, negotiation, contract reviews, supplier 
              disputes, employment law and many other important issues.
              </blockquote>

              <p>
              In addition to this, we are specialists in family and immigration law 
              catering for a wide range of legal services and needs. Whether you 
              are a limited company or an individual, we would like to welcome you 
              to our family.
              </p>

              <p>
              Our office is located in Black Cat Drive, Northampton which is in the 
              East Midlands region of England. We are easily accessible and able to 
              meet with you. A highly qualified and experienced team of solicitors 
              and lawyers (“team”) with wealth of legal knowledge and good track 
              record of successfully helping clients with their respective matters.
              </p>

              <p>
              Wherever you live, we can do all the legal work over the phone or 
              online, so location is not important.
              </p>
              </div>

              <div className='signature-text'>
                <strong><p>‘Our Signature Matters’</p></strong>
              </div>


              <div>
                <h4><a href="#">Our Mission</a></h4>
                <p>
                Many clients come to us with what can seem like insurmountable 
                problems. With our highly experienced legal team, we analyse 
                your situation and find the optimum legal solutions to help you 
                achieve the outcomes that you seek. We take away your stress and 
                pressure and help to find a strategy to achieve your objectives.
                </p>

                <h4><a href="#">Our Vision</a></h4>
                <p>
                We are striving to be the fastest growing Sub-Saharan company in 
                the UK. In the future, we intend to expand our business to other 
                countries as well. We know that our legal services are second to 
                none and we sincerely wish to scale that expertise to reach and 
                serve as many businesses and individuals as possible in the coming 
                years.
                </p>

                <h4><a href="#">Our Core Values</a></h4>
                <h5>Friendship</h5>
                <p>
                At the heart of what we do is building friendly relationships with 
                all of our clientele. We are a family and those values run deep and 
                we treat our customers like family
                </p>

                <h5>Trust</h5>
                <p>
                Being a lawyer is a unique role of trust. The trust of dealing with 
                financial and confidential documents from a company but also the 
                trust of dealing with intimate family details
                </p>

                <p>
                The greatest example of trust in the role of lawyer is writing a will 
                for a client, for the client is putting trust in you to deal with 
                matters even after his/her death. Real trust comes from within and as 
                a family practice we hold those values dear.
                </p>

                <h5>Comfort</h5>
                <p>
                We strive to bring comfort to families and reunite them through the 
                legal process and support individuals through painful divorce 
                proceedings.
                </p>

                <p>
                For limited companies we bring peace of mind by extracting them from 
                challenging situations and winning favourable outcomes.
                </p>

                <h5>Respect</h5>
                <p>
                Respect is a two-way street. We build professional relationships based 
                on mutual respect. Respect is ingrained in all that we do.
                </p>

                {/* LIST SECTION */}
                <h4><a>Why Choose Our Services?</a></h4>

                <ul>
                  <li>
                  We are the first choice for family, commercial and immigration legal 
                  services in London and the UK.
                  </li>

                  <li>
                  We are highly experienced in giving commercial legal support to UK 
                  companies investing or doing business in Africa.
                  </li>

                  <li>
                  Our commercial legal knowledge of oil, gas and energy is second to 
                  none; two of our team worked for Shell for years and other 
                  prestigious corporations
                  </li>

                  <li>
                  We carry out research, analysis, in-depth investigation and preparation 
                  (pre-litigation and during litigation) to achieve quick resolutions and 
                  cost savings for clients.
                  </li>

                  <li>
                  We are very attentive to clients’ needs and preferred outcomes. We 
                  inspire confidence when advising and preparing clients during the 
                  litigation process.
                  </li>

                  <li>
                  Our team has strong advocacy skills, diligent preparation and present 
                  evidence coherently. We build persuasive legal arguments which have 
                  led to many positive outcomes for businesses.
                  </li>

                  <li>
                  We are excellent at drafting and presenting issues in a compelling 
                  manner to achieve successful negotiations and early settlements in 
                  disputes.
                  </li>

                  <li>
                  We have a broad knowledge of the rules of evidence, disclosure and 
                  document exchange which enables us to confidently prepare and 
                  present evidence in court.
                  </li>
                </ul>
              </div>

              <div>
                <h4>ABOUT US</h4>
                <p>
                We are one of London’s Premier Family Law Firms with a unique 
                family team of four that specialise in immigration and family law.
                </p>

                <p>
                We are specialists in family, commercial and immigration law 
                catering for a wide range of legal services and needs, we 
                would like to welcome you to our family
                </p>

                <h4>Family Legal Services</h4>
                <p>
                We know how painful family legal processes can be for all concerned
                </p>
                <p>
                If you are facing a difficult divorce, you will need the best divorce 
                lawyer you can find. If you need to work out child visitation rights 
                or need family law advice for child custody, we are the firm to entrust 
                with family matters. Our team will support you with empathy and listen 
                to your exact needs. We will bring you peace of mind by achieving your 
                legal goals in any family dispute or family related legal case.
                </p>

                <p>
                Our highly experienced and diligent team will stand by you every step 
                of the way taking all necessary action for a positive outcome. For 
                family legal matters, hiring a caring firm is the best choice. As a 
                family ourselves we are committed to getting your family the legal 
                results you deserve. Whatever your needs, we are the firm to take you 
                forward and make the impossible possible.
                </p>
                <p>
                Our family law specialist Faith has over 35 years’ experience in Law. 
                Faith is totally focused on results and outcomes for clients. It is 
                her confidence, exceptional analytical and advocacy skills which help 
                her win cases. Having worked as a criminal defence lawyer, Faith has 
                the steel and determination you need for difficult cases.
                </p>
                <p>
                Whatever your family needs, please get in touch. Here are some of the 
                areas we cover. This is not an exhaustive list, so please contact us 
                to ask about other issues:
                </p>
              </div>

              <div>
                <h5>Divorce and Separation</h5>
                <ul>
                  <li>Family and Private life Applications under parent/partner route</li>
                  <li>Collaborative law</li>
                  <li>Contested hearings</li>
                  <li>Child visitation</li>
                  <li> Financial settlements</li>
                  <li>Domestic abuse</li>
                  <li>Child Care proceeding</li>
                  <li>Prenuptial agreements</li>
                </ul>
              </div>

              <div>
              <h4>Commercial Legal Services</h4>
              <p>
              We have a wealth of experience that we bring to the table in commercial law. 
              We are commercial litigation solicitors who help Limited Companies and 
              Investors in Africa to achieve their trade and investment objectives.
              </p>
              <p>
              The majority of our clients are Small and Medium-Sized Limited companies, 
              but we have worked in Large Corporations too in the past. Whatever your 
              need for corporate solicitors, whether it be commercial contract law, 
              commercial property law or any other type of corporate commercial legal 
              support, please get in touch. -
              </p>
              </div>

              <div>
                <h4>Anglo-African Firm</h4>
                <p>
                Having our UK firm Victoria Solicitors and our Nigerian company Victoria 
                Chambers in Lagos means that we are a highly effective Anglo-African 
                legal firm to support UK firms in all of their transactions and legal 
                matters. Although External lawyers, we operate as if we were your own 
                in-house law team to meet your company’s bespoke needs.
                </p>
              </div>

              <div>
                <h4>Exceptional Track Record</h4>
                <p>
                Our team has worked for years in the Energy sector including Oil and Gas, 
                Legal Management in the Brewery Industry and represented and negotiated 
                commercial contracts with governments and regulators running into hundreds 
                of millions. We are also experts in Employment Law relating to employment 
                tribunals and company processes.
                </p>
              </div>

              <div>
                <h4>Commercial Agreements</h4>
                <p>
                As commercial lawyers, we help draw up robust commercial agreements to work 
                in your favour. Contracts which are meticulously researched and compiled 
                with expert advice. With our detailed knowledge of commercial litigation, 
                we help your company work efficiently by managing the legal side of the 
                supply chain relationships and related disputes.
                </p>
                <p>
                Our job is to protect all of your commercial investments and protect your 
                cash flow. As Anglo-African experts we are the go-to for UK firms looking 
                to invest in Africa.
                </p>
                <p>
                Victoria Solicitors work closely with your company for a detailed understanding 
                of your business requirements. This way we are fully equipped to help your 
                business develop a bespoke legal strategy to mitigate risks and challenges. 
                With decades of legal experience in businesses, we find pragmatic solutions 
                that guarantee your business the very best commercial terms in negotiations 
                and planning.
                </p>
              </div>

              <div>
                <h4>Risk Mitigation</h4>
                <p>
                Risk Mitigation for limited companies is a core part of what we do. We identify 
                risks in commercial agreements and draft resolutions to protect your venture. 
                We take on the management of commercial processes with the review, negotiation 
                and resolution of issues.
                </p>
              </div>

              <div>
                <h4>Commercial Contract Law</h4>
                <p>
                We manage commercial contracts such as partnership agreements, contract terminations, 
                agency arrangements and specialist agreements in certain sectors of industry. We also 
                deal with law relating to tax and applicability to IR35 consultants and contractors. 
                For commercial contract review we help you negotiate and fully comprehend the contract 
                terms and conditions.
                </p>
              </div>

              <div>
                <h4>Commercial Litigation Fees</h4>
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
                <td>...</td>
                <td>
                  <tr>
                  &#xa3; A standard hourly rate of £200 - £350 per hour excluding VAT
                  </tr>
                  <tr>
                  &#xa3; 
                  </tr>
                </td>
                <td>
                Court fees and disbursements are additional to fee costs
                </td>
              </tr>
              <tr>
                  <td>...</td>
                <td>
                  <tr>
                  &#xa3; Typical costs range from £1500 to £10,000.
                  </tr>
                  <tr>
                  &#xa3; 
                  </tr>
                </td>
                <td>
                All fees quoted are based on estimates and may vary from time to time 
                depending on the case. However, we can give an accurate costing once 
                all the relevant information has been provided.
                </td>
              </tr>
              </tbody>
          </Table>
          </div>

          <div>
            <h4>List of Commercial Services:</h4>
            <ul>
              <li>Breach of Contract Claims</li>
              <li>Professional Negligence</li>
              <li>Arbitration</li>
              <li>Partnership/limited liability partnership disputes</li>
              <li>Tort Claims</li>
              <li>Intellectual Property disputes: trademarks, copyright, 
                patents and passing of
              </li>
              <li>Commercial Contract Support - due diligence, negotiation, 
                procurement etc
              </li>
              <li>Commercial Contract Law and Commercial Litigation</li>
              <li>Contract Review</li>
              <li>Risk Mitigation</li>
            </ul>
          </div>

          <div>
            <h4>Immigration Legal Services</h4>
          </div>


          <div>
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
                        <td>Very Significant Obstacles To Integration</td>
                        <td>Revocation Of Deportation Order</td>
                        <td>Child Arrangements Order</td>
                      </tr>
                      <tr>
                        <td>Challenging Refusal Of Visitor Visa</td>
                        <td>Discretionary Leave Applications</td>
                        <td>Deportation Appeal</td>
                        <td>Contesting Non-Molestation Orders</td>
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