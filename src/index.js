import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Home from '../src/components/Home/Home';
import Appointment from './components/Appointment/Appointments';
import Services from '../src/components/Services/Services';
import DivorceFamily from '../src/components/DivorceFamily/DivorceFamily';
import ImmigrationServices from '../src/components/ImmigrationServices/ImmigrationServices';
import ImmigrationApplications from '../src/components/ImmigrationApplications/ImmigrationApplications';
import WorkVisas from '../src/components/WorkVisas/WorkVisas';
import ChallengeRefusals from '../src/components/ChallengeRefusals/ChallengeRefusals';
import ContactUs from '../src/components/ContactUs/ContactUs';
import Family from '../src/components/Family/Family';
import Partner from '../src/components/Partner/Partner';
import MarriageVisitVisa from '../src/components/MarriageVisitVisa/MarriageVisitVisa';
import ProposedCivilPartnerVisa from '../src/components/ProposedCivilPartnerVisa/ProposedCivilPartnerVisa';
import EntryClearanceUnmarriedPartnerSpouse from '../src/components/EntryClearanceUnmarriedPartnerSpouse/EntryClearanceUnmarriedPartnerSpouse';
import ExtensionStaySpouse from '../src/components/ExtensionStaySpouse/ExtensionStaySpouse';
import SwitchingSpouseVisa from '../src/components/SwitchingSpouseVisa/SwitchingSpouseVisa';
import ILRSpouseVisa from '../src/components/ILRSpouseVisa/ILRSpouseVisa';
import EntryClearanceCivilPartnerVisa from '../src/components/EntryClearanceCivilPartnerVisa/EntryClearanceCivilPartnerVisa';
import SwitchingCivilPartnerVisa from '../src/components/SwitchingCivilPartnerVisa/SwitchingCivilPartnerVisa';
import ExtensionStayCivilPartner from '../src/components/ExtensionStayCivilPartner/ExtensionStayCivilPartner';
import FamilyPrivateLifeUnmarriedPartner from '../src/components/FamilyPrivateLifeUnmarriedPartner/FamilyPrivateLifeUnmarriedPartner';
import AllHumanRightsApplication from '../src/components/AllHumanRightsApplication/AllHumanRightsApplication';
import ExtensionStayUnmarriedPartner from '../src/components/ExtensionStayUnmarriedPartner/ExtensionStayUnmarriedPartner';
import ILRUnmarriedPartner from '../src/components/ILRUnmarriedPartner/ILRUnmarriedPartner';
import SwitchingSameSexPartnerVisa from '../src/components/SwitchingSameSexPartnerVisa/SwitchingSameSexPartnerVisa';
import ExtensionSameSexPartner from '../src/components/ExtensionSameSexPartner/ExtensionSameSexPartner';
import ILRSameSexPartner from '../src/components/ILRSameSexPartner/ILRSameSexPartner';
import ILRVictimDomesticViolence from '../src/components/ILRVictimDomesticViolence/ILRVictimDomesticViolence';
import ILRBereavedPartner from '../src/components/ILRBereavedPartner/ILRBereavedPartner';
import ParentAndChild from '../src/components/ParentAndChild/ParentAndChild';
import ParentBritishCitizenChild from '../src/components/ParentBritishCitizenChild/ParentBritishCitizenChild';
import IndefiniteLeaveEnterChild from '../src/components/IndefiniteLeaveEnterChild/IndefiniteLeaveEnterChild';
import AdultDependentRelative from '../src/components/AdultDependentRelative/AdultDependentRelative';
import EntryClearanceChildPersonPresentSettled from './components/EntryClearanceChildPersonPresentSettled/EntryClearanceChildPersonPresentSettled.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/DivorceFamily" element={<DivorceFamily />} />
        <Route path="/ImmigrationServices" element={<ImmigrationServices />} />
        <Route path="/ImmigrationApplications" element={<ImmigrationApplications />} />
        <Route path="/WorkVisas" element={<WorkVisas />} />
        <Route path="/ChallengeRefusals" element={<ChallengeRefusals />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/MarriageVisitVisa" element={<MarriageVisitVisa />} />
        <Route path="/ProposedCivilPartnerVisa" element={<ProposedCivilPartnerVisa />} />
        <Route path="/EntryClearanceUnmarriedPartnerSpouse" element={<EntryClearanceUnmarriedPartnerSpouse />} />
        <Route path="/ExtensionStaySpouse" element={<ExtensionStaySpouse />} />
        <Route path="/SwitchingSpouseVisa" element={<SwitchingSpouseVisa />} />
        <Route path="/ILRSpouseVisa" element={<ILRSpouseVisa />} />
        <Route path="/EntryClearanceCivilPartnerVisa" element={<EntryClearanceCivilPartnerVisa />} />
        <Route path="/SwitchingCivilPartnerVisa" element={<SwitchingCivilPartnerVisa />} />
        <Route path="/ExtensionStayCivilPartner" element={<ExtensionStayCivilPartner />} />
        <Route path="/FamilyPrivateLifeUnmarriedPartner" element={<FamilyPrivateLifeUnmarriedPartner />} />
        <Route path="/AllHumanRightsApplication" element={<AllHumanRightsApplication />} />
        <Route path="/ExtensionStayUnmarriedPartner" element={<ExtensionStayUnmarriedPartner />} />
        <Route path="/ILRUnmarriedPartner" element={<ILRUnmarriedPartner />} />
        <Route path="/SwitchingSameSexPartnerVisa" element={<SwitchingSameSexPartnerVisa />} />
        <Route path="/ExtensionSameSexPartner" element={<ExtensionSameSexPartner />} />
        <Route path="/ILRSameSexPartner" element={<ILRSameSexPartner />} />
        <Route path="/ILRVictimDomesticViolence" element={<ILRVictimDomesticViolence />} />
        <Route path="/ILRBereavedPartner" element={<ILRBereavedPartner />} />
        <Route path="/ParentAndChild" element={<ParentAndChild />} />
        <Route path="/ParentBritishCitizenChild" element={<ParentBritishCitizenChild />} />
        <Route path="/IndefiniteLeaveEnterChild" element={<IndefiniteLeaveEnterChild />} />
        <Route path="/AdultDependentRelative" element={<AdultDependentRelative />} />
        <Route path="/EntryClearanceChildPersonPresentSettled" element={<EntryClearanceChildPersonPresentSettled />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
