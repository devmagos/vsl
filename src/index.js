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
import TypeOfVisa from './components/TypeOfVisa/TypeOfVisa.js';
import SwitchingToInnovatorVisa from './components/SwitchingToInnovatorVisa/SwitchingToInnovatorVisa.js';
import Tier1EntrepreneurVisaExtension from './components/Tier1EntrepreneurVisaExtension/Tier1EntrepreneurVisaExtension.js';
import ILRTier1Entrepreneur from './components/ILRTier1Entrepreneur/ILRTier1Entrepreneur.js';
import DependentsTier1Entrepreneur from './components/DependentsTier1Entrepreneur/DependentsTier1Entrepreneur.js';
import EntryClearanceTier1ExceptionalTalent from './components/EntryClearanceTier1ExceptionalTalent/EntryClearanceTier1ExceptionalTalent.js';
import SwitchingToTier1ExceptionalTalent from './components/SwitchingToTier1ExceptionalTalent/SwitchingToTier1ExceptionalTalent.js';
import ExtensionStayTier1ExceptionalTalent from './components/ExtensionStayTier1ExceptionalTalent/ExtensionStayTier1ExceptionalTalent.js';
import ILRAsTier1ExceptionalTalent from './components/ILRAsTier1ExceptionalTalent/ILRAsTier1ExceptionalTalent.js';
import DependantsTier1ExceptionalTalentMigrant from './components/DependantsTier1ExceptionalTalentMigrant/DependantsTier1ExceptionalTalentMigrant.js';
import Tier1GraduateEntrepreneurVisaExtension from './components/Tier1GraduateEntrepreneurVisaExtension/Tier1GraduateEntrepreneurVisaExtension.js';
import DependantsTier1GraduateEntrepreneur from './components/DependantsTier1GraduateEntrepreneur/DependantsTier1GraduateEntrepreneur.js';
import EntryClearanceTier1Investor from './components/EntryClearanceTier1Investor/EntryClearanceTier1Investor.js';
import SwitchingToTier1InvestorVisa from './components/SwitchingToTier1InvestorVisa/SwitchingToTier1InvestorVisa.js';
import Tier1InvestorVisaExtension from './components/Tier1InvestorVisaExtension/Tier1InvestorVisaExtension.js';
import ILRTier1Investor from './components/ILRTier1Investor/ILRTier1Investor.js';
import EntryClearanceTier2GeneralMigrant from './components/EntryClearanceTier2GeneralMigrant/EntryClearanceTier2GeneralMigrant.js';
import SwitchingToTier2General from './components/SwitchingToTier2General/SwitchingToTier2General.js';
import Tier2GeneralExtension from './components/Tier2GeneralExtension/Tier2GeneralExtension.js';
import ILRTier2General from './components/ILRTier2General/ILRTier2General.js';
import DependentsTier2GeneralMigrant from './components/DependentsTier2GeneralMigrant/DependentsTier2GeneralMigrant.js';
import EntryClearanceTier2MinisterReligion from './components/EntryClearanceTier2MinisterReligion/EntryClearanceTier2MinisterReligion.js';
import SwitchingToTier2MinisterReligion from './components/SwitchingToTier2MinisterReligion/SwitchingToTier2MinisterReligion.js';
import Tier2MinisterReligionVisaExtension from './components/Tier2MinisterReligionVisaExtension/Tier2MinisterReligionVisaExtension.js';
import ILRTier2MinisterReligion from './components/ILRTier2MinisterReligion/ILRTier2MinisterReligion.js';
import DependantsTier2MinisterReligion from './components/DependantsTier2MinisterReligion/DependantsTier2MinisterReligion.js';
import EntryClearanceTier2Sportsperson from './components/EntryClearanceTier2Sportsperson/EntryClearanceTier2Sportsperson.js';
import SwitchingToTier2Sportsperson from './components/SwitchingToTier2Sportsperson/SwitchingToTier2Sportsperson.js';
import Tier2SportspersonVisaExtension from './components/Tier2SportspersonVisaExtension/Tier2SportspersonVisaExtension.js';
import ILRTier2Sportsperson from './components/ILRTier2Sportsperson/ILRTier2Sportsperson.js';
import DependentsTier2Sportsperson from './components/DependentsTier2Sportsperson/DependentsTier2Sportsperson.js';
import EntryClearanceTier2ICT from './components/EntryClearanceTier2ICT/EntryClearanceTier2ICT.js';
import SwitchingToTier2ICT from './components/SwitchingToTier2ICT/SwitchingToTier2ICT.js';
import Tier2ICTExtension from './components/Tier2ICTExtension/Tier2ICTExtension.js';
import ILRTier2ICT from './components/ILRTier2ICT/ILRTier2ICT.js';
import DependantsTier2ICTMigrant from './components/DependantsTier2ICTMigrant/DependantsTier2ICTMigrant.js';
import EntryClearanceDomesticWorker from './components/EntryClearanceDomesticWorker/EntryClearanceDomesticWorker.js';
import DomesticWorkerVisaExtension from './components/DomesticWorkerVisaExtension/DomesticWorkerVisaExtension.js';
import ILRDomesticWorker from './components/ILRDomesticWorker/ILRDomesticWorker.js';
import DependentsDomesticWorker from './components/DependentsDomesticWorker/DependentsDomesticWorker.js';
import EntryClearanceSoleRepresentativeOverseasBusiness from './components/EntryClearanceSoleRepresentativeOverseasBusiness/EntryClearanceSoleRepresentativeOverseasBusiness.js';
import SoleRepresentativeVisaExtension from './components/SoleRepresentativeVisaExtension/SoleRepresentativeVisaExtension.js';
import ILRSoleRepresentative from './components/ILRSoleRepresentative/ILRSoleRepresentative.js';
import DependantsSoleRepresentatives from './components/DependantsSoleRepresentatives/DependantsSoleRepresentatives.js';
import DependantsPersonWithUKAncestryVisa from './components/DependantsPersonWithUKAncestryVisa/DependantsPersonWithUKAncestryVisa.js';
import ILRUKAncestry from './components/ILRUKAncestry/ILRUKAncestry.js';
import UKAncestryVisaExtension from './components/UKAncestryVisaExtension/UKAncestryVisaExtension.js';
import EntryClearanceUKAncestryVisa from './components/EntryClearanceUKAncestryVisa/EntryClearanceUKAncestryVisa.js';
import EntryClearanceTier5CharityWorker from './components/EntryClearanceTier5CharityWorker/EntryClearanceTier5CharityWorker.js';
import Tier5CharityWorkersVisaExtension from './components/Tier5CharityWorkersVisaExtension/Tier5CharityWorkersVisaExtension.js';
import DependantsTier5CharityWorker from './components/DependantsTier5CharityWorker/DependantsTier5CharityWorker.js';
import EntryClearanceTier5CreativeSporting from './components/EntryClearanceTier5CreativeSporting/EntryClearanceTier5CreativeSporting.js';
import SwitchingToTier5CreativeSporting from './components/SwitchingToTier5CreativeSporting/SwitchingToTier5CreativeSporting.js';
import Tier5CreativeAndSportingExtension from './components/Tier5CreativeAndSportingExtension/Tier5CreativeAndSportingExtension.js';
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
        <Route path="/TypeOfVisa" element={<TypeOfVisa />} />
        <Route path="/SwitchingToInnovatorVisa" element={<SwitchingToInnovatorVisa />} />
        <Route path="/Tier1EntrepreneurVisaExtension" element={<Tier1EntrepreneurVisaExtension />} />
        <Route path="/ILRTier1Entrepreneur" element={<ILRTier1Entrepreneur />} />
        <Route path="/DependentsTier1Entrepreneur" element={<DependentsTier1Entrepreneur />} />
        <Route path="/EntryClearanceTier1ExceptionalTalent" element={<EntryClearanceTier1ExceptionalTalent />} />
        <Route path="/SwitchingToTier1ExceptionalTalent" element={<SwitchingToTier1ExceptionalTalent />} />
        <Route path="/ExtensionStayTier1ExceptionalTalent" element={<ExtensionStayTier1ExceptionalTalent />} />
        <Route path="/ILRAsTier1ExceptionalTalent" element={<ILRAsTier1ExceptionalTalent />} />
        <Route path="/DependantsTier1ExceptionalTalentMigrant" element={<DependantsTier1ExceptionalTalentMigrant />} />
        <Route path="/Tier1GraduateEntrepreneurVisaExtension" element={<Tier1GraduateEntrepreneurVisaExtension />} />
        <Route path="/DependantsTier1GraduateEntrepreneur" element={<DependantsTier1GraduateEntrepreneur />} />
        <Route path="/EntryClearanceTier1Investor" element={<EntryClearanceTier1Investor />} />
        <Route path="/SwitchingToTier1InvestorVisa" element={<SwitchingToTier1InvestorVisa />} />
        <Route path="/Tier1InvestorVisaExtension" element={<Tier1InvestorVisaExtension />} />
        <Route path="/ILRTier1Investor" element={<ILRTier1Investor />} />
        <Route path="/EntryClearanceTier2GeneralMigrant" element={<EntryClearanceTier2GeneralMigrant />} />
        <Route path="/SwitchingToTier2General" element={<SwitchingToTier2General />} />
        <Route path="/Tier2GeneralExtension" element={<Tier2GeneralExtension />} />
        <Route path="/ILRTier2General" element={<ILRTier2General />} />
        <Route path="/DependentsTier2GeneralMigrant" element={<DependentsTier2GeneralMigrant />} />
        <Route path="/EntryClearanceTier2MinisterReligion" element={<EntryClearanceTier2MinisterReligion />} />
        <Route path="/SwitchingToTier2MinisterReligion" element={<SwitchingToTier2MinisterReligion />} />
        <Route path="/Tier2MinisterReligionVisaExtension" element={<Tier2MinisterReligionVisaExtension />} />
        <Route path="/ILRTier2MinisterReligion" element={<ILRTier2MinisterReligion />} />
        <Route path="/DependantsTier2MinisterReligion" element={<DependantsTier2MinisterReligion />} />
        <Route path="/EntryClearanceTier2Sportsperson" element={<EntryClearanceTier2Sportsperson />} />
        <Route path="/SwitchingToTier2Sportsperson" element={<SwitchingToTier2Sportsperson />} />
        <Route path="/Tier2SportspersonVisaExtension" element={<Tier2SportspersonVisaExtension />} />
        <Route path="/ILRTier2Sportsperson" element={<ILRTier2Sportsperson />} />
        <Route path="/DependentsTier2Sportsperson" element={<DependentsTier2Sportsperson />} />
        <Route path="/EntryClearanceTier2ICT" element={<EntryClearanceTier2ICT />} />
        <Route path="/SwitchingToTier2ICT" element={<SwitchingToTier2ICT />} />
        <Route path="/Tier2ICTExtension" element={<Tier2ICTExtension />} />
        <Route path="/ILRTier2ICT" element={<ILRTier2ICT />} />
        <Route path="/DependantsTier2ICTMigrant" element={<DependantsTier2ICTMigrant />} />
        <Route path="/EntryClearanceDomesticWorker" element={<EntryClearanceDomesticWorker />} />
        <Route path="/DomesticWorkerVisaExtension" element={<DomesticWorkerVisaExtension />} />
        <Route path="/ILRDomesticWorker" element={<ILRDomesticWorker />} />
        <Route path="/DependentsDomesticWorker" element={<DependentsDomesticWorker />} />
        <Route path="/EntryClearanceSoleRepresentativeOverseasBusiness" element={<EntryClearanceSoleRepresentativeOverseasBusiness />} />
        <Route path="/SoleRepresentativeVisaExtension" element={<SoleRepresentativeVisaExtension />} />
        <Route path="/ILRSoleRepresentative" element={<ILRSoleRepresentative />} />
        <Route path="/DependantsSoleRepresentatives" element={<DependantsSoleRepresentatives />} />
        <Route path="/DependantsPersonWithUKAncestryVisa" element={<DependantsPersonWithUKAncestryVisa />} />
        <Route path="/ILRUKAncestry" element={<ILRUKAncestry />} />
        <Route path="/UKAncestryVisaExtension" element={<UKAncestryVisaExtension />} />
        <Route path="/EntryClearanceUKAncestryVisa" element={<EntryClearanceUKAncestryVisa />} />
        <Route path="/EntryClearanceTier5CharityWorker" element={<EntryClearanceTier5CharityWorker />} />
        <Route path="/Tier5CharityWorkersVisaExtension" element={<Tier5CharityWorkersVisaExtension />} />
        <Route path="/DependantsTier5CharityWorker" element={<DependantsTier5CharityWorker />} />
        <Route path="/EntryClearanceTier5CreativeSporting" element={<EntryClearanceTier5CreativeSporting />} />
        <Route path="/SwitchingToTier5CreativeSporting" element={<SwitchingToTier5CreativeSporting />} />
        <Route path="/Tier5CreativeAndSportingExtension" element={<Tier5CreativeAndSportingExtension />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
