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
    <>
    <>
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
            <p>
            It can be incredibly stressful trying to understand immigration 
            laws and the worry that unscrupulous agencies might charge 
            exorbitant fees. Worry no more, we are a trustworthy family law 
            firm. We always give you the correct information and appropriate 
            visa with transparent pricing.
            </p>

          <blockquote className='side-block-text'>
          As immigration experts, we provide immigration advice and legal 
          representations relating to all types of UK visa and immigration 
          matters including Family Visa UK, Work Visa UK and Global Talent UK. 
          We provide dependable legal advice and representations for your 
          immigration matter.
          </blockquote>

          <p>
          The team can provide you with expert legal advice and representations 
          remotely from our office. Utilizing innovative technology, we can 
          handle your matter remotely without the need for you to visit our 
          offices. We remain more than happy to welcome clients into our offices, 
          however if you prefer to be served remotely, we are proud to render 
          same.
          </p>

          <p>
          Victoria Solicitors Limited is duly authorised and regulated by the 
          Solicitors Regulation Authority (SRA), signifying that our team 
          maintains the highest possible standards with regards to the 
          provision of our immigration legal services.
          </p>
          </div>          

          <div>
            <h4><a href="#">UK migration legal support</a></h4>
            <p>
            Whatever your visa requirement, a UK Visa appeal or trying to 
            bring your spouse or children to the UK to join you, we back 
            you 100%. We totally understand how challenging these kinds 
            of processes can be, so we keep you informed at every stage.
            </p>

            <p>
            As a UK law family firm with African roots, we know how 
            important it is to be reunited with family. This is why we go 
            the extra mile to ensure you achieve your goals. Our whole 
            family team has been through the visa process in the past, so 
            we have genuine empathy.
            </p>

            <p>
            If your English language skills are basic, don’t worry as our 
            team of consultants and solicitors is multilingual. Let us 
            take care of everything. Our team of language experts can find 
            out all the pertinent information to your case to ensure a 
            successful outcome.
            </p>

            <div>
              <h4>Working remotely</h4>
              <p>
              We can carry out all the work on your immigration matter 
              remotely without the need for you to attend our office 
              physically. Our remote service in relation to your immigration 
              matter can entail the following:
              </p>

              <ul>
                <li>
                Assessment of your eligibility in an initial immigration advice 
                and consultation session through Zoom or Teams meeting and quote 
                you a fixed fee to handle your immigration matter. You shall be 
                advised on the requirements, documents, procedures and costs etc 
                related to your immigration matter;
                </li>
                <li>
                Upon instructing us for your immigration matter after the initial 
                immigration advice and consultation session, our team will email 
                you the service agreement for you to digitally sign the same and 
                return the same to our office by email;
                </li>
                <li>
                  We will provide of a checklist of all required information to 
                  support your application.
                </li>
                <li>
                You will send us an email of all the supporting documents in PDF 
                format to be submitted in support of your immigration matter;
                </li>
                <li>
                  We assess your supporting documents and give our opinion on 
                  the same;
                </li>
                <li>
                Our immigration lawyers then complete the application form with you 
                online in a Zoom meeting by sharing our screen;
                </li>
                <li>
                We submit your immigration application online and also help you pay 
                the application fee online;
                </li>
                <li>
                Where necessary, we prepare a detailed personal statement to be 
                submitted in support of the immigration application in a Zoom 
                meeting by sharing our screen with you;
                </li>
                <li>
                We prepare a detailed cover letter, listing all the documents and 
                setting out all the legal representations, in support of your 
                immigration application;
                </li>
                <li>
                We upload all the supporting documents online to be considered in 
                support of the immigration application;
                </li>
                <li>
                We carry out all the follow up work on your immigration application 
                until a decision is made by the Home Office UKVI on your immigration 
                application.
                </li>
              </ul>
            </div>


            <div>
              <h4><a href="#">Advice & Representations for UK Immigration Applications</a></h4>
              <p>
              Various UK visa categories for which our team can provide expert immigration 
              advice and legal representations are as follows:
              </p>

              <Row>
                <Col>
                  <div className='links'><p>Family</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Marriage Visitors Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Proposed Civil Partner Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry clearance as an unmarried partner/spouse</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into a spouse Visa UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of stay as a spouse</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR Spouse Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry Clearance as a Civil Partner Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into a Civil Partner Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of stay as a Civil Partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Family & Private Life (unmarried Partner)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>All Human Rights application</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Extension of stay as an unmarried partner </p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR Unmarried Partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into same sex partner Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of a same sex partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR same sex partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR - Victim of Domestic Violence</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR - Bereaved Partner ILR - Bereaved Partner</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Parent & Child</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Parent of a British Citizen child</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Indefinite Leave to Enter as a child</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Adult Dependent Relative</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as a child of a person present & settled iN the UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>
              <div>
                <h4><a href="#">UK Work Visas:</a></h4>
              <Row>
                <Col>
                  <div className='links'><p>Type of Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Entry Clearance as Innovator Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Switching into Innovator Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Tier 1 Entrepreneur Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR As Tier 1 Entrepreneur</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Dependents of Tier 1 Entrepreneur</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry Clearance as Tier 1 Exceptional Talent</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into Tier 1 Exceptional Talent</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Extension of Stay as Tier 1 Exceptional Talent</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR As Tier 1 Exceptional Talent</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 1 Exceptional Talent Migrant</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 1 Graduate Entrepreneur</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 1 Graduate Entrepreneur Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 1 Graduate Entrepreneur</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 1 Investor</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 1 Investor Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 1 Investor Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR As Tier 1 Investor</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 General Migrant</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 General</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 2 General Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 General</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 2 General Migrant</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 Minister of Religion</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 Minister of Religion</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 2 Minister of Religion Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 Minister of Religion</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 2 Minister of Religion</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 Sportsperson</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 Sportsperson</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 2 Sportsperson Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 Sportsperson</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 2 Sportsperson</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 ICT</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 ICT</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 2 ICT Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 ICT</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants OF Tier 2 ICT Migrant</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Domestic Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Domestic Worker Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Domestic Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependents of Domestic Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as A Sole Representative of Overseas Business</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Sole Representative Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR As Sole Representative</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Sole Representatives</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of A Person with UK Ancestry Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR UK Ancestry</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>UK Ancestry Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance – UK Ancestry Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Charity Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Charity Workers Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 5 Charity Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Creative & Sporting</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 Creative & Sporting</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Creative & Sporting Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 5 Creative & Sporting</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Religious Worker</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 5 Religious Workers Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 Government Authorised Exchange</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 5 Government Authorised Exchange Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Youth Mobility Scheme (YMS)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 International Agreement</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 International Agreement Visa Extension</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 5 International Agreement</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Education</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Student Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Child Student Visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Short term Student</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Settlement</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>ILR 10-year Long residence</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>EU Settlement Scheme</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Returning Resident visa</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Private Life</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Private and family live including 20 years unlawful residence application</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Immigration Appeal and Admin Review:</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Administrative Review Against Refusal of Entry Clearance as PBS Migrant</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Administrative Review Against Refusal of An In-Country Refusal by The Home Office</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance Appeal Stage 1(Pre-Hearing Notice)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance Appeal Stage 2(Post-Hearing Notice)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>In-Country Immigration Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links-aa'>
                    <a href="#">
                      <p>
                      <>Asylum</><br></br>
                      <>Appeal</>
                      </p>
                      <i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i>
                    </a>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Deportation Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Application to 1st Tier Tribunal for Permission To Appeal To Upper Tribunal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Application to Upper Tribunal for Permission To Appeal To Upper Tribunal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Appeal to The Upper Tribunal Following Grant of Permission To Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
              <Row>
                <Col md="6">
                  <div className='links'><p>Application to The Upper Tribunal for Permission To Appeal To The Court Of Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Application to The Court Of Appeal for Permission To Appeal To Court Of Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Appeal To Court Of Appeal</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Judicial Review in the Upper Tribunal</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Pre-Action Protocol for Judicial Review Against the Home Office, UKBA</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Paper Application to Upper Tribunal for Permission to Apply For Judicial Review (JR)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Renewal of An Application for Permission to Apply For Judicial Review (JR) Against The Home Office, UKBA</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Judicial Review Against the Home Office, UKVI Following Grant of Permission to Apply for Judicial Review (JR)</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Emergency Injunction to Stop Removal from The UK</p><a href="#"><i className="fa fa-angle-double-right" style={{fontSize: '48px', color: 'green'}}></i></a></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4>Deportation, Removal and Bail</h4>
                <p>
                Deportation, Removal and Bail cases need immediate attention. We have extensive 
                experience in representing clients successfully. We even visit you in detention 
                or prison to win your case as soon as possible and strive to get you released 
                and stop the deportation.
                </p>
              </div>
              </div>


              {/* BOOKING FORM LOCATION HERE */}
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
                </Container>
                </div>

      <Footer />
      </>
      </>
    );
  }
  
export default Home