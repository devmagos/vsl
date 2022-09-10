import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import HomeNav from '../HomeNav/HomeNav.js';
import BookingForm from '../BookingForm/BookingForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../Signup/Signup';
import Table from 'react-bootstrap/Table';
import John from "../Images/john.jpg"
import Cassie from "../Images/cassie.jpg"
import Josh from "../Images/josh.webp"


function Home() {
  return (
    <>
    <Container fluid>
      <Row id='top'>
        <Header />
      </Row>

      <Row>
        <HomeNav />
      </Row>
      {/* Form page section below */}
      <Row className='form-solicitors'>
                <Col md="5" className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-125 position-relative">
                  <div class="row g-0 p-4 rounded flex-md-row mb-4 h-md-250 position-relative">
                    <Col class="d-flex flex-column position-static" className='welcome-text'>
                      <h1><strong>A Warm Welcome To Victoria Solicitors!</strong></h1>
                      <p class="card-text m-2 p-3 line-height-3" className='card-text'>
                      <strong>
                      We are one of London’s Premier Family Law Firms with a 
                      unique family team of four that specialize in family, 
                      commercial and immigration law
                      </strong>
                      </p>
                      <div class="">
                        <button class="btn p-3 m-1 text-light btn-sm" id='btncolor' type="button"><Link to="../Appointment" class="nav-link">Contact Us</Link></button>
                        <button class="btn p-3 m-1 text-light btn-sm" id='btncolorb' type="button"><Link to="../Appointment" class="nav-link">Book an Appointment</Link></button>
                      </div>
                    </Col>
                  </div>
                </Col>

              <Col md="7">
                  <SignupForm />
              </Col>
      </Row>

      <Row>
        <Col md="9">
          <div className="side-text">
          <div>
              <h4>Immigration Solicitors In London</h4>
              <p>We are one of London’s Premier Family Law Firms with a unique 
                family team of four that specialize in family, commercial and 
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
                <h4><strong></strong><a src="#">Our Mission</a></h4>
                <p>
                Many clients come to us with what can seem like insurmountable 
                problems. With our highly experienced legal team, we analyse 
                your situation and find the optimum legal solutions to help you 
                achieve the outcomes that you seek. We take away your stress and 
                pressure and help to find a strategy to achieve your objectives.
                </p>

                <h4><a src="#">Our Vision</a></h4>
                <p>
                We are striving to be the fastest growing Sub-Saharan company in 
                the UK. In the future, we intend to expand our business to other 
                countries as well. We know that our legal services are second to 
                none and we sincerely wish to scale that expertise to reach and 
                serve as many businesses and individuals as possible in the coming 
                years.
                </p>

                <h4><a id="values">Our Core Values</a></h4>
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
                <h4 id='choose'><a>Why Choose Our Services?</a></h4>

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
                <h4 id="about-us">ABOUT US</h4>
                <p>
                We are one of London’s Premier Family Law Firms with a unique 
                family team of four that specialise in immigration and family law.
                </p>

                <p>
                We are specialists in family, commercial and immigration law 
                catering for a wide range of legal services and needs, we 
                would like to welcome you to our family
                </p>

                <h4 id="family-services">Family Legal Services</h4>
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
                <p id="contact-us">
                Whatever your family needs, please get in touch. Here are some of the 
                areas we cover. This is not an exhaustive list, so please contact us 
                to ask about other issues:
                </p>
              </div>

              <div>
                <h5 id="divorce">Divorce and Separation</h5>
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
              <h4 id="services">Commercial Legal Services</h4>
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
                <td>Advisor</td>
                <td>
                  <tr>
                  A standard hourly rate ranges from &#xa3;200 per hour excluding VAT
                  </tr>
                </td>
                <td>
                Court fees and disbursements are additional to fee costs
                </td>
              </tr>
              <tr>
                  <td>Advisor</td>
                <td>
                  <tr>
                  A standard hourly rate ranges from &#xa3;1500 per hour excluding VAT.
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
            <h4 id="commercial-services">List of Commercial Services:</h4>
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
            <h4 id="Immigration">Immigration Legal Services</h4>
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
            <h4 id='uk-migration'><a src="#">UK migration legal support</a></h4>
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
              <h4 id='remote-work'>Working remotely</h4>
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
              <h4 id='ukservices'><a src="#">Advice & Representations for UK Immigration Applications</a></h4>
              <p>
              Various UK visa categories for which our team can provide expert immigration 
              advice and legal representations are as follows:
              </p>

              <Row>
                <Col>
                  <div className='links' id='family'><p>Family</p><Link to="../Family" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Partner</p><Link to="../Partner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Marriage Visitors Visa UK</p><Link to="../MarriageVisitVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Proposed Civil Partner Visa UK</p><Link to="../ProposedCivilPartnerVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry clearance as an unmarried partner/spouse</p><Link to="../EntryClearanceUnmarriedPartnerSpouse" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into a spouse Visa UK</p><Link to="../SwitchingSpouseVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of stay as a spouse</p><Link to="../ExtensionStaySpouse" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR Spouse Visa</p><Link to="../ILRSpouseVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry Clearance as a Civil Partner Visa</p><Link to="../EntryClearanceCivilPartnerVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into a Civil Partner Visa</p><Link to="../SwitchingCivilPartnerVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of stay as a Civil Partner</p><Link to="../ExtensionStayCivilPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links' id="private-life"><p>Family & Private Life (unmarried Partner)</p><Link to="../FamilyPrivateLifeUnmarriedPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>All Human Rights application</p><Link to="../AllHumanRightsApplication" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Extension of stay as an unmarried partner</p><Link to="../ExtensionStayUnmarriedPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR Unmarried Partner</p><Link to="../ILRUnmarriedPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into same sex partner Visa</p><Link to="../SwitchingSameSexPartnerVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Extension of a same sex partner</p><Link to="../ExtensionSameSexPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR same sex partner</p><Link to="../ILRSameSexPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR - Victim of Domestic Violence</p><Link to="../ILRVictimDomesticViolence" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>ILR - Bereaved Partner</p><Link to="../ILRBereavedPartner" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Parent & Child</p><Link to="../ParentAndChild" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Parent of a British Citizen child</p><Link to="../ParentBritishCitizenChild" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Indefinite Leave to Enter as a child</p><Link to="../IndefiniteLeaveEnterChild" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Adult Dependent Relative</p><Link to="../AdultDependentRelative" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as a child of a person present & settled in the UK</p><Link to="../EntryClearanceChildPersonPresentSettled" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>
              <div>
                <h4><a id="uk-work-visa">UK Work Visas:</a></h4>
              <Row>
                <Col>
                  <div className='links'><p>Type of Visa</p><Link to="../TypeOfVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Entry Clearance as Innovator Visa</p><Link to="../EntryClearanceInnovatorVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Switching into Innovator Visa</p><Link to="../SwitchingToInnovatorVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Tier 1 Entrepreneur Visa Extension</p><Link to="../Tier1EntrepreneurVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>ILR As Tier 1 Entrepreneur</p><Link to="../ILRTier1Entrepreneur" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Dependents of Tier 1 Entrepreneur</p><Link to="../DependentsTier1Entrepreneur" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry Clearance as Tier 1 Exceptional Talent</p><Link to="../EntryClearanceTier1ExceptionalTalent" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Switching into Tier 1 Exceptional Talent</p><Link to="../SwitchingToTier1ExceptionalTalent" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Extension of Stay as Tier 1 Exceptional Talent</p><Link to="../ExtensionStayTier1ExceptionalTalent" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR As Tier 1 Exceptional Talent</p><Link to="../ILRAsTier1ExceptionalTalent" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 1 Exceptional Talent Migrant</p><Link to="../DependantsTier1ExceptionalTalentMigrant" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 1 Graduate Entrepreneur</p><Link to="../SwitchingToTier1GraduateEntrepreneur" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 1 Graduate Entrepreneur Visa Extension</p><Link to="../Tier1GraduateEntrepreneurVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 1 Graduate Entrepreneur</p><Link to="../DependantsTier1GraduateEntrepreneur" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 1 Investor</p><Link to="../EntryClearanceTier1Investor" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 1 Investor Visa</p><Link to="../SwitchingToTier1InvestorVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 1 Investor Visa Extension</p><Link to="../Tier1InvestorVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR As Tier 1 Investor</p><Link to="../ILRTier1Investor" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 General Migrant</p><Link to="../EntryClearanceTier2GeneralMigrant" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 General</p><Link to="../SwitchingToTier2General" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 2 General Extension</p><Link to="../Tier2GeneralExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 General</p><Link to="../ILRTier2General" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 2 General Migrant</p><Link to="../DependentsTier2GeneralMigrant" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 Minister of Religion</p><Link to="../EntryClearanceTier2MinisterReligion" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 Minister of Religion</p><Link to="../SwitchingToTier2MinisterReligion" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 2 Minister of Religion Visa Extension</p><Link to="../Tier2MinisterReligionVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 Minister of Religion</p><Link to="../ILRTier2MinisterReligion" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 2 Minister of Religion</p><Link to="../DependantsTier2MinisterReligion" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 Sportsperson</p><Link to="../EntryClearanceTier2Sportsperson" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 Sportsperson</p><Link to="../SwitchingToTier2Sportsperson" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 2 Sportsperson Visa Extension</p><Link to="../Tier2SportspersonVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 Sportsperson</p><Link to="../ILRTier2Sportsperson" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 2 Sportsperson</p><Link to="../DependentsTier2Sportsperson" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 2 ICT</p><Link to="../EntryClearanceTier2ICT" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 2 ICT</p><Link to="../SwitchingToTier2ICT" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 2 ICT Extension</p><Link to="../Tier2ICTExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 2 ICT</p><Link to="../ILRTier2ICT" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants OF Tier 2 ICT Migrant</p><Link to="../DependantsTier2ICTMigrant" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Domestic Worker</p><Link to="../EntryClearanceDomesticWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Domestic Worker Visa Extension</p><Link to="../DomesticWorkerVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Domestic Worker</p><Link to="../ILRDomesticWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependents of Domestic Worker</p><Link to="../DependentsDomesticWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as A Sole Representative of Overseas Business</p><Link to="../EntryClearanceSoleRepresentativeOverseasBusiness" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Sole Representative Visa Extension</p><Link to="../SoleRepresentativeVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR As Sole Representative</p><Link to="../ILRSoleRepresentative" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Dependants of Sole Representatives</p><Link to="../DependantsSoleRepresentatives" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of A Person with UK Ancestry Visa</p><Link to="../DependantsPersonWithUKAncestryVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>ILR UK Ancestry</p><Link to="../ILRUKAncestry" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>UK Ancestry Visa Extension</p><Link to="../UKAncestryVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance – UK Ancestry Visa</p><Link to="../EntryClearanceUKAncestryVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Charity Worker</p><Link to="../EntryClearanceTier5CharityWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Charity Workers Visa Extension</p><Link to="../Tier5CharityWorkersVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependants of Tier 5 Charity Worker</p><Link to="../DependantsTier5CharityWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Creative & Sporting</p><Link to="../EntryClearanceTier5CreativeSporting" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 Creative & Sporting</p><Link to="../SwitchingToTier5CreativeSporting" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Creative & Sporting Extension</p><Link to="../Tier5CreativeAndSportingExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Dependents of Tier 5 Creative & Sporting</p><Link to="../DependentsTier5CreativeAndSporting" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Entry Clearance as Tier 5 Religious Worker</p><Link to="../EntryClearanceTier5ReligiousWorker" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 5 Religious Workers Visa Extension</p><Link to="../Tier5ReligiousWorkersVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 Government Authorised Exchange</p><Link to="../SwitchingToTier5GovernmentAuthorisedExchange" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Tier 5 Government Authorised Exchange Visa Extension</p><Link to="../Tier5GovernmentAuthorisedExchangeVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 Youth Mobility Scheme (YMS)</p><Link to="../Tier5YouthMobilitySchemeYMS" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Switching into Tier 5 International Agreement</p><Link to="../SwitchingToTier5InternationalAgreement" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Tier 5 International Agreement Visa Extension</p><Link to="../Tier5InternationalAgreementVisaExtension" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>ILR Tier 5 International Agreement</p><Link to="../ILRTier5InternationalAgreement" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4 id="Education">Education</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Student Visa</p><Link to="../StudentVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>Child Student Visa</p><Link to="../ChildStudentVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Short term Student</p><Link to="../ShortTermStudent" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4 id='Settlement'>Settlement</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>ILR 10-year Long residence</p><Link to="../ILR10YearLongResidence" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col md="6">
                  <div className='links'><p>EU Settlement Scheme</p><Link to="../EUSettlementScheme" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Returning Resident visa</p><Link to="../ReturningResidentVisa" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4 id="private-life">Private Life</h4>
              <Row>
                <Col md="6">
                  <div className='links'><p>Private and family live including 20 years unlawful residence application</p><Link to="../PrivateAndfamilyliveIncluding20YearsUnlawfulResidenceApplication" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4 id="immigration-appeal-review">Immigration Appeal and Admin Review:</h4>
              <Row>
                <Col>
                  <div className='links'><p>Administrative Review Against Refusal of Entry Clearance as PBS Migrant</p><Link to="../AdministrativeReviewAgainstRefusalEntryClearancePBSMigrant" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Administrative Review Against Refusal of An In-Country Refusal by The Home Office</p><Link to="../AdministrativeReviewAgainstRefusalCountryRefusalByTheHomeOffice" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Entry Clearance Appeal Stage 1(Pre-Hearing Notice)</p><Link to="../EntryClearanceAppealStage1PreHearingNotice" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Entry Clearance Appeal Stage 2(Post-Hearing Notice)</p><Link to="../EntryClearanceAppealStage2PostHearingNotice" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>In-Country Immigration Appeal</p><Link to="../InCountryImmigrationAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links-aa'>
                    <a src="#">
                      <p>
                      <>Asylum</><br></br>
                      <>Appeal</>
                      </p>
                      <Link to="../AsylumAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link>
                    </a>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Deportation Appeal</p><Link to="../DeportationAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Application to 1st Tier Tribunal for Permission To Appeal To Upper Tribunal</p><Link to="../ApplicationTo1stTierTribunalForPermissionToAppealToUpperTribunal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Application to Upper Tribunal for Permission To Appeal To Upper Tribunal</p><Link to="../ApplicationTUpperTribunalForPermissionToAppealToUpperTribunal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Appeal to The Upper Tribunal Following Grant of Permission To Appeal</p><Link to="../AppealToTheUpperTribunalFollowingGrantOfPermissionToAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
              <Row>
                <Col>
                  <div className='links'><p>Application to The Upper Tribunal for Permission To Appeal To The Court Of Appeal</p><Link to="../ApplicationToTheUpperTribunalForPermissionToAppealToTheCourtOfAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Application to The Court Of Appeal for Permission To Appeal To Court Of Appeal</p><Link to="../ApplicationToTheCourtOfAppealForPermissionToAppealToCourtOfAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Appeal To Court Of Appeal</p><Link to="../AppealToCourtOfAppeal" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>
              </div>

              <div>
                <h4 id="judicial-review">Judicial Review in the Upper Tribunal:</h4>
              <Row>
                <Col>
                  <div className='links'><p>Pre-Action Protocol for Judicial Review Against the Home Office, UKBA</p><Link to="../PreActionProtocolForJudicialReviewAgainstTheHomeOfficeUKBA" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Paper Application to Upper Tribunal for Permission to Apply For Judicial Review (JR)</p><Link to="../PaperApplicationToUpperTribunalForPermissionToApplyForJudicialReviewJR" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className='links'><p>Renewal of An Application for Permission to Apply For Judicial Review (JR) Against The Home Office, UKBA</p><Link to="../RenewalApplicationForPermissionToApplyForJudicialReviewJRAgainstTheHomeOfficeUKBA" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
                <Col>
                  <div className='links'><p>Judicial Review Against the Home Office, UKVI Following Grant of Permission to Apply for Judicial Review (JR)</p><Link to="../JudicialReviewAgainstTheHomeOfficeUKVIFollowingGrantOfPermissionToApplyForJudicialReviewJR" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <div className='links'><p>Emergency Injunction to Stop Removal from The UK</p><Link to="../EmergencyInjunctionToStopRemovalFromTheUK" class="nav-link"><i className="fa fa-angle-double-right icon-style" style={{'font-size': '48px'}}></i></Link></div>
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
                </div>
            </Col>
            

        {/* Side Table section Begins */}
        <Col md="3">
        <Table bordered hover size='sm' responsive>
          <thead>
            <tr class="side-text-th">
              <th><Link to='../Services' className="th-link">Our Services</Link></th>
            </tr>
          </thead>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../OurCoreValues" className="th-link">Our Core Values</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../Friendship'>Friendship</Link></td>
          </tr>
          <tr>
              <td><Link to='../Trust'>Trust</Link></td>
          </tr>
          <tr>
              <td><Link to='../Comfort'>Comfort</Link></td>
          </tr>
          <tr>
              <td><Link to='../Respect'>Respect</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../Services" className="th-link">CORE SERVICES</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../FamilyLegalServices'>Family Legal Services</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialLegalServices '>Commercial Legal Services </Link></td>
          </tr>
          <tr>
              <td><Link to='../ImmigrationLegalServices'>Immigration Legal Services</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../FamilyLegalServices" className="th-link">Family Legal Services</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../DivorceAndSeparation'>Divorce and Separation</Link></td>
          </tr>
          <tr>
              <td><Link to='../FamilyPrivatelifeApplicationsUnderParentPartnerRoute'>Family and Private life Applications under parent/partner route</Link></td>
          </tr>
          <tr>
              <td><Link to='../CollaborativeLaw'>Collaborative law</Link></td>
          </tr>
          <tr>
              <td><Link to='../ContestedHearings'>Contested hearings</Link></td>
          </tr>
          <tr>
              <td><Link to='../ChildVisitation'>Child visitation</Link></td>
          </tr>
          <tr>
              <td><Link to='../FinancialSettlements'>Financial settlements</Link></td>
          </tr>
          <tr>
              <td><Link to='../DomesticAbuse'>Domestic abuse</Link></td>
          </tr>
          <tr>
              <td><Link to='../ChildCareProceedings'>Child Care proceedings</Link></td>
          </tr>
          <tr>
              <td><Link to='../PrenuptialAgreements'>Prenuptial agreements</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../CommercialLaw" className="th-link">Commercial Law</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../AngloAfricanFirm'>Anglo-African Firm</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExceptionalTrackRecord'>Exceptional Track Record</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialAgreements'>Commercial Agreements</Link></td>
          </tr>
          <tr>
              <td><Link to='../RiskMitigation'>Risk Mitigation</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialContractLaw'>Commercial Contract Law</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialLitigationFees'>Commercial Litigation Fees</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../ListOfCommercialServices" className="th-link">List of Commercial Services: </Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../BreachOfContractClaims'>Breach of Contract Claims</Link></td>
          </tr>
          <tr>
              <td><Link to='../ProfessionalNegligence'>Professional Negligence</Link></td>
          </tr>
          <tr>
              <td><Link to='../Arbitration'>Arbitration</Link></td>
          </tr>
          <tr>
              <td><Link to='../PartnershipLimitedLiabilityPartnershipDisputes'>Partnership/limited liability partnership disputes</Link></td>
          </tr>
          <tr>
              <td><Link to='../TortClaims'>Tort Claims</Link></td>
          </tr>
          <tr>
              <td><Link to='../IntellectualPropertyDisputes'>Intellectual Property disputes: trademarks, copyright, patents and passing off</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialContractSupport'>Commercial Contract Support - due diligence, negotiation, procurement etc</Link></td>
          </tr>
          <tr>
              <td><Link to='../CommercialContractLawCommercialLitigation'>Commercial Contract Law and Commercial Litigation</Link></td>
          </tr>
          <tr>
            <td><Link to='../ContractReview'>Contract Review</Link></td>
          </tr>
          <tr>
              <td><Link to='../RiskMitigation'>Risk Mitigation</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../Immigration" className="th-link">Immigration</Link></th>
            </tr>
          </thead>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../UKMigraintLegalSupport" className="th-link">UK migration legal support</Link></th>
            </tr>
          </thead>
          <thead>
            <tr class="side-text-th">
              <th><Link to='../WorkingRemotely' className="th-link">Working remotely</Link></th>
            </tr>
          </thead>
          <thead>
            <tr class="side-text-th">
              <th><Link to='../Family' className="th-link">Family</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../Partner'>Partner</Link></td>
          </tr>
          <tr>
              <td><Link to='../MarriageVisitorsVisaUK'>Marriage Visitors Visa UK</Link></td>
          </tr>
          <tr>
              <td><Link to='../ProposedCivilPartnerVisaUK'>Proposed Civil Partner Visa UK</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceUnmarriedPartnerSpouse'>Entry clearance as an unmarried partner/spouse</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingTopouseVisaUK'>Switching into a spouse Visa UK</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExtensionOfStayAsSpouse'>Extension of stay as a spouse</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRSpouseVisa'>ILR Spouse Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceCivilPartner'>Entry Clearance as a Civil Partner</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToCivilPartnerVisa'>Switching into a Civil Partner Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExtensionfStayCivilPartner'>Extension of stay as a Civil Partner</Link></td>
          </tr>
          <tr>
              <td><Link to='../FamilyAndPrivateLifeParent'>Family & Private Life (Parent)</Link></td>
          </tr>
          <tr>
              <td><Link to='../FamilyAndPrivateLifeParentUnmarriedPartner'>Family & Private Life (unmarried Partner)</Link></td>
          </tr>
          <tr>
              <td><Link to='../AllHumanRightsApplication'>All Human Rights application</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExtensionOfStayUnmarriedPartner'>Extension of stay as an unmarried partner</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRUnmarriedPartner'>ILR Unmarried Partner</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToSameSexPartnerVisa'>Switching into same sex partner Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExtensionOfSameSexPartner'>Extension of a same sex partner</Link></td>
          </tr>
          <tr>
            <td><Link to='../ILRSameSexPartner'>ILR same sex partner</Link></td>
          </tr>
          <tr>
            <td><Link to='../ILRVictimOfDomesticViolence'>ILR – Victim of Domestic Violence</Link></td>
          </tr>
          <tr>
            <td><Link to='../ILRBereavedPartnerILRBereavedPartner'>ILR – Bereaved Partner ILR – Bereaved Partner</Link></td>
          </tr>
          <tr>
            <td><Link to='../ParentChild'>Parent & Child</Link></td>
          </tr>
          <tr>
            <td><Link to='../ParentOfBritishCitizenChild'>Parent of a British Citizen child</Link></td>
          </tr>
          <tr>
            <td><Link to='../IndefiniteLeaveToEnterChild'>Indefinite Leave to Enter as a child</Link></td>
          </tr>
          <tr>
            <td><Link to='../AdultDependantRelative'>Adult Dependant Relative</Link></td>
          </tr>
          <tr>
            <td><Link to='../EntryClearanceChildOfPersonPresentAndSettledUK'>Entry Clearance as a child of a person present & settled in the UK</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../UKWorkVisas" className="th-link">UK Work Visas:</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../TypeOfVisa'>Type of Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceInnovatorVisa'>Entry Clearance as Innovator Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToInnovatorVisa'>Switching into Innovator Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier1EntrepreneurVisaExtension'>Tier 1 Entrepreneur Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRAsTier1Entrepreneur'>ILR As Tier 1 Entrepreneur</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier1Entrepreneur'>Dependants of Tier 1 Entrepreneur</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier1ExceptionalTalent'>Entry Clearance as Tier 1 Exceptional Talent</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier1ExceptionalTalent'>Switching into Tier 1 Exceptional Talent</Link></td>
          </tr>
          <tr>
              <td><Link to='../ExtensionOfStayTier1ExceptionalTalent'>Extension of Stay as Tier 1 Exceptional Talent</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRAsTier1ExceptionalTalent'>ILR As Tier 1 Exceptional Talent</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier1ExceptionalTalentMigrant'>Dependants of Tier 1 Exceptional Talent Migrant</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier1GraduateEntrepreneur'>Switching into Tier 1 Graduate Entrepreneur</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier1GraduateEntrepreneurVisaExtension'>Tier 1 Graduate Entrepreneur Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier1GraduateEntrepreneur'>Dependants of Tier 1 Graduate Entrepreneur</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier1Investor'>Entry Clearance as Tier 1 Investor</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier1InvestorVisa'>Switching into Tier 1 Investor Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier1InvestorVisaExtension'>Tier 1 Investor Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRTier1Investor'>ILR As Tier 1 Investor</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier2GeneralMigrant'>Entry Clearance as Tier 2 General Migrant</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier2General'>Switching into Tier 2 General</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier2GeneralExtension'>Tier 2 General Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRTier2General'>ILR Tier 2 General</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier2GeneralMigrant'>Dependants of Tier 2 General Migrant</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier2MinisterOfReligion'>Entry Clearance as Tier 2 Minister of Religion</Link></td>
          </tr>
          <tr>
            <td><Link to='../SwitchingToTier2MinisterOfReligion'>Switching into Tier 2 Minister of Religion</Link></td>
          </tr>
          <tr>
            <td><Link to='../Tier2MinisterOfReligionVisaExtension'>Tier 2 Minister of Religion Visa Extension</Link></td>
          </tr>
          <tr>
            <td><Link to='../ILRTier2MinisterOfReligion'>ILR Tier 2 Minister of Religion</Link></td>
          </tr>
          <tr>
            <td><Link to='../DependantsOfTier2MinisterOfReligion'>Dependants of Tier 2 Minister of Religion</Link></td>
          </tr>
          <tr>
            <td><Link to='../EntryClearanceTier2Sportsperson'>Entry Clearance as Tier 2 Sportsperson</Link></td>
          </tr>
          <tr>
            <td><Link to='../SwitchingToTier2Sportsperson'>Switching into Tier 2 Sportsperson</Link></td>
          </tr>
          <tr>
            <td><Link to='../Tier2SportspersonVisaExtension'>Tier 2 Sportsperson Visa Extension</Link></td>
          </tr>
          <tr>
            <td><Link to='../ILRTier2Sportsperson'>ILR Tier 2 Sportsperson</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier2Sportsperson'>Dependants of Tier 2 Sportsperson</Link></td>
          </tr>
          <tr>
            <td><Link to='../EntryClearanceTier2ICT'>Entry Clearance as Tier 2 ICT</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier2ICT'>Switching into Tier 2 ICT</Link></td>
          </tr>
          <tr>
            <td><Link to='../Tier2ICTExtension'>Tier 2 ICT Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRTier2ICT'>ILR Tier 2 ICT</Link></td>
          </tr>
          <tr>
            <td><Link to='../DependantsOfTier2ICTMigrant'>Dependants of Tier 2 ICT Migrant</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceDomesticWorker'>Entry Clearance as Domestic Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../DomesticWorkerVisaExtension'>Domestic Worker Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRDomesticWorker'>ILR Domestic Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfDomesticWorker'>Dependants of Domestic Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceSoleRepresentativeOfOverseasBusiness'>Entry Clearance as A Sole Representative of Overseas Business</Link></td>
          </tr>
          <tr>
              <td><Link to='../SoleRepresentativeVisaExtension'>Sole Representative Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRSoleRepresentative'>ILR As Sole Representative</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsSoleRepresentatives'>Dependants of Sole Representatives</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsPersonWithUKAncestryVisa'>Dependants of A Person with UK Ancestry Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRUKAncestry'>ILR UK Ancestry</Link></td>
          </tr>
          <tr>
            <td><Link to='../UKAncestryVisaExtension'>UK Ancestry Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceUKAncestryVisa'>Entry Clearance – UK Ancestry Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier5CharityWorker'>Entry Clearance as Tier 5 Charity Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5CharityWorkersVisaExtension'>Tier 5 Charity Workers Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsTier5CharityWorker'>Dependants of Tier 5 Charity Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntrylearanceTier5CreativeAndSporting'>Entry Clearance as Tier 5 Creative & Sporting</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier5CreativeAndSporting'>Switching into Tier 5 Creative & Sporting</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5CreativeAndSportingExtension'>Tier 5 Creative & Sporting Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../DependantsOfTier5CreativeAndSporting'>Dependants of Tier 5 Creative & Sporting</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceTier5ReligiousWorker'>Entry Clearance as Tier 5 Religious Worker</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5ReligiousWorkersVisaExtension'>Tier 5 Religious Workers Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier5GovernmentAuthorisedExchange'>Switching into Tier 5 Government Authorised Exchange</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5GovernmentAuthorisedExchangeVisaExtension'>Tier 5 Government Authorised Exchange Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5YouthMobilitySchemeYMS'>Tier 5 Youth Mobility Scheme (YMS)</Link></td>
          </tr>
          <tr>
              <td><Link to='../SwitchingToTier5InternationalAgreement'>Switching into Tier 5 International Agreement</Link></td>
          </tr>
          <tr>
              <td><Link to='../Tier5InternationalAgreementVisaExtension'>Tier 5 International Agreement Visa Extension</Link></td>
          </tr>
          <tr>
              <td><Link to='../ILRTier5InternationalAgreement'>ILR – Tier 5 International Agreement</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../Education" className="th-link">Education</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../StudentVisa'>Student Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../ChildStudentVisa'>Child Student Visa</Link></td>
          </tr>
          <tr>
              <td><Link to='../ShortTermStudent'>Short term Student</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../Settlement" className="th-link">Settlement</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../ILR10YearLongResidence'>ILR 10-year Long residence</Link></td>
          </tr>
          <tr>
              <td><Link to='../EUSettlementScheme'>EU Settlement Scheme</Link></td>
          </tr>
          <tr>
              <td><Link to='../ReturningResidentVisa'>Returning Resident visa</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../PrivateLife" className="th-link">Private Life</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../PrivateFamilyLiveIncluding20YearsUnlawfulResidenceApplication'>Private and family live including 20 years unlawful residence application</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../ImmigrationAppealAdminReview" className="th-link">Immigration Appeal and Admin Review:</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../AdministrativeReviewAgainstRefusalOfEntryClearancePBSMigrant'>Administrative Review Against Refusal of Entry Clearance as PBS Migrant</Link></td>
          </tr>
          <tr>
              <td><Link to='../AdminReviewAgainstRefusalInCountryRefusalByTheHomeOffice'>Admin Review Against Refusal of An In-Country Refusal by The Home Office</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceAppealStage1PreHearingNotice'>Entry Clearance Appeal Stage 1 (Pre-Hearing Notice)</Link></td>
          </tr>
          <tr>
              <td><Link to='../EntryClearanceAppealStage2PostHearingNotice'>Entry Clearance Appeal Stage 2 (Post-Hearing Notice)</Link></td>
          </tr>
          <tr>
              <td><Link to='../InCountryImmigrationAppeal'>In-Country Immigration Appeal</Link></td>
          </tr>
          <tr>
              <td><Link to='../AsylumAppeal'>Asylum Appeal</Link></td>
          </tr>
          <tr>
              <td><Link to='../DeportationAppeal'>Deportation Appeal</Link></td>
          </tr>
          <tr>
            <td><Link to='../ApplicationTo1stTierTribunalForPermissionToAppealToUpperTribunal'>Application To 1st Tier Tribunal for Permission to Appeal To Upper Tribunal</Link></td>
          </tr>
          <tr>
              <td><Link to='../ApplicationToUpperTribunalForPermissionToAppealToUpperTribunal'>Application to Upper Tribunal for Permission To Appeal To Upper Tribunal</Link></td>
          </tr>
          <tr>
              <td><Link to='../AppealToTheUpperTribunalFollowingGrantOfPermissionToAppeal'>Appeal to The Upper Tribunal Following Grant Of Permission To Appeal</Link></td>
          </tr>
          <tr>
            <td><Link to='../ApplicationToTheUpperTribunalForPermissionToAppealToTheCourtOfAppeal'>Application to The Upper Tribunal For Permission To Appeal To The Court Of Appeal</Link></td>
          </tr>
          <tr>
              <td><Link to='../ApplicationToTheCourtOfAppealForPermissionToAppealToCourtOfAppeal'>Application to The Court Of Appeal For Permission To Appeal To Court Of Appeal</Link></td>
          </tr>
          <tr>
              <td><Link to='../AppealToTheCourtOfAppeal'>Appeal to The Court Of Appeal</Link></td>
          </tr>
          </tbody>
          <thead>
            <tr class="side-text-th">
              <th><Link to="../JudicialReviewInTheUpperTribunal" className="th-link">Judicial Review in the Upper Tribunal:</Link></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Link to='../PreActionProtocolForJudicialReviewAgainstTheHomeOfficeUKBA'>Pre-Action Protocol for Judicial Review Against the Home Office, UKBA</Link></td>
          </tr>
          <tr>
              <td><Link to='../PaperApplicationToUpperTribunalForPermissionToApplyForJudicialReviewJR'>Paper Application to Upper Tribunal for Permission to Apply For Judicial Review (JR)</Link></td>
          </tr>
          <tr>
              <td><Link to='../RenewalOfAnApplicationForPermissionToApplyForJudicialReviewJRAgainstTheHomeOfficeUKBA'>Renewal of An Application for Permission to Apply For Judicial Review (JR) Against The Home Office, UKBA</Link></td>
          </tr>
          <tr>
              <td><Link to='../JudicialReviewAgainsTheHomeOfficeUKVIFollowingGrantOfPermissionToApplyForJudicialReviewJR'>Judicial Review Against the Home Office, UKVI Following Grant of Permission to Apply for Judicial Review (JR)</Link></td>
          </tr>
          <tr>
              <td><Link to='../EmergencyInjunctionToStopRemovalFromTheUK'>Emergency Injunction to Stop Removal from The UK</Link></td>
          </tr>
          </tbody>
        </Table>
            </Col>
        </Row>
        <Row>
          <BookingForm />
        </Row>
        <Row>
          <h3 class="mt-5 reviews">What Our Clients Say About Us In The Reviews</h3>
          <div class="card-deck">
            <div class="card w-10">
              <img src={John} className='card-img-top logosiz rounded-circle' alt="John Newman" />
              <div class="card-body">
                <h5 class="card-title text-mid">John Newman</h5>
                <p class="text-mid">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star text-warning"></i>
                </p>
                <p class="text-mid">
                <button type="button" class="btn btn-primary rounded-pill">8 Weeks Ago</button>
                </p>
                <p class="card-text">I wanted to apply for citizenship but because of special circumstances, I needed expert advice. So I contacted Victoria Solicitors Limited. And I was successful, they are good at their craft.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 7 mins ago</small>
              </div>
            </div>
            <div class="card w-10">
              <img src={Cassie} className='card-img-top logosiz rounded-circle' alt="Cassie yin" />
              <div class="card-body">
                <h5 class="card-title text-mid">Cassie Yin</h5>
                <p class="text-mid">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                </p>
                <p class="text-mid">
                <button type="button" class="btn btn-primary rounded-pill">5 Weeks Ago</button>
                </p>
                <p class="card-text">Victoria Solicitors Limited are excellent. My case was complicated due to previous advice from other immigration solicitors. But i contacted Victoria Solicitors Limited and my case was solved.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card w-10">
              <img src={Josh} className='card-img-top logosiz rounded-circle' alt="Josh Nimzom" />
              <div class="card-body">
                <h5 class="card-title text-mid">Josh Ninzom</h5>
                <p class="text-mid">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star text-warning"></i>
                </p>
                <p class="text-mid">
                <button type="button" class="btn btn-primary rounded-pill">2 Weeks Ago</button>
                </p>
                <p class="card-text">Victoria Solicitors Limited are excellent at giving the best advice and getting great results.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 2 mins ago</small>
              </div>
            </div>
      </div>
        </Row>
        <Row>
          <Footer />
        </Row>
        <div><a src='#top' title='Back to top'><i class="fa fa-angle-double-up btntop"  style={{'font-size': '48px'}}></i></a></div>
        </Container>
      </>
    );
  }
  
export default Home