import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OrthopaedicTreatments from './components/OrthopaedicTreatments';
import CardiacServicePage from './components/CardiacServicePage';
import OncologyServicePage from './components/OncologyServicePage';
import BMTServicePage from './components/BMTServicePage';
import NeuroSpineServicePage from './components/NeuroSpineServicePage';
import GISurgeryServicePage from './components/GISurgeryServicePage';
import ArtemisOrthoService from './pages/artemis-ortho';
import MedantaOrthoService from './pages/medanta-ortho';
import ApolloOrthoService from './pages/apollo-ortho';
import MaxOrthoService from './pages/max-ortho';
import AmritaOrthoService from './pages/amrita-ortho';
import SarvodayaOrthoService from './pages/sarvodaya-ortho';
import ArtemisOncoService from './pages/artemis-onco';
import MedantaOncoService from './pages/medanta-onco';
import ApolloOncoService from './pages/apollo-onco';
import MaxOncoService from './pages/max-onco';
import AmritaOncoService from './pages/amrita-onco';
import SarvodayaOncoService from './pages/sarvodaya-onco';
import ArtemisCardiacService from './pages/artemis-cardiac';
import MedantaCardiacService from './pages/medanta-cardiac';
import ApolloCardiacService from './pages/apollo-cardiac';
import MaxCardiacService from './pages/max-cardiac';
import AmritaCardiacService from './pages/amrita-cardiac';
import SarvodayaCardiacService from './pages/sarvodaya-cardiac';
import ArtemisBMTService from './pages/artemis-bmt';
import MedantaBMTService from './pages/medanta-bmt';
import ApolloBMTService from './pages/apollo-bmt';
import MaxBMTService from './pages/max-bmt';
import AmritaBMTService from './pages/amrita-bmt';
import SarvodayaBMTService from './pages/sarvodaya-bmt';
import ArtemisGISurgeryService from './pages/artemis-gi-surgery';
import MedantaGISurgeryService from './pages/medanta-gi-surgery';
import ApolloGISurgeryService from './pages/apollo-gi-surgery';
import MaxGISurgeryService from './pages/max-gi-surgery';
import AmritaGISurgeryService from './pages/amrita-gi-surgery';
import SarvodayaGISurgeryService from './pages/sarvodaya-gi-surgery';
import ArtemisNeuroSpineService from './pages/artemis-neurospine';
import MedantaNeuroSpineService from './pages/medanta-neurospine';
import ApolloNeuroSpineService from './pages/apollo-neurospine';
import MaxNeuroSpineService from './pages/max-neurospine';
import AmritaNeuroSpineService from './pages/amrita-neurospine';
import SarvodayaNeuroSpineService from './pages/sarvodaya-neurospine';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orthopaedic" element={<OrthopaedicTreatments />} />
        <Route path="/oncology-service" element={<OncologyServicePage />} />
        <Route path="/cardiac" element={<CardiacServicePage />} />
        <Route path="/bmt" element={<BMTServicePage />} />
        <Route path="/neuro-spine" element={<NeuroSpineServicePage />} />
        <Route path="/gi-surgery" element={<GISurgeryServicePage />} />
        <Route path="/artemis-ortho" element={<ArtemisOrthoService />} />
        <Route path="/medanta-ortho" element={<MedantaOrthoService />} />
        <Route path="/apollo-ortho" element={<ApolloOrthoService />} />
        <Route path="/max-ortho" element={<MaxOrthoService />} />
        <Route path="/amrita-ortho" element={<AmritaOrthoService />} />
        <Route path="/sarvodaya-ortho" element={<SarvodayaOrthoService />} />
        <Route path="/artemis-onco" element={<ArtemisOncoService />} />
        <Route path="/medanta-onco" element={<MedantaOncoService />} />
        <Route path="/apollo-onco" element={<ApolloOncoService />} />
        <Route path="/max-onco" element={<MaxOncoService />} />
        <Route path="/amrita-onco" element={<AmritaOncoService />} />
        <Route path="/sarvodaya-onco" element={<SarvodayaOncoService />} />
        <Route path="/artemis-cardiac" element={<ArtemisCardiacService />} />
        <Route path="/medanta-cardiac" element={<MedantaCardiacService />} />
        <Route path="/apollo-cardiac" element={<ApolloCardiacService />} />
        <Route path="/max-cardiac" element={<MaxCardiacService />} />
        <Route path="/amrita-cardiac" element={<AmritaCardiacService />} />
        <Route path="/sarvodaya-cardiac" element={<SarvodayaCardiacService />} />
        <Route path="/artemis-bmt" element={<ArtemisBMTService />} />
        <Route path="/medanta-bmt" element={<MedantaBMTService />} />
        <Route path="/apollo-bmt" element={<ApolloBMTService />} />
        <Route path="/max-bmt" element={<MaxBMTService />} />
        <Route path="/amrita-bmt" element={<AmritaBMTService />} />
        <Route path="/sarvodaya-bmt" element={<SarvodayaBMTService />} />
        <Route path="/artemis-gi-surgery" element={<ArtemisGISurgeryService />} />
        <Route path="/medanta-gi-surgery" element={<MedantaGISurgeryService />} />
        <Route path="/apollo-gi-surgery" element={<ApolloGISurgeryService />} />
        <Route path="/max-gi-surgery" element={<MaxGISurgeryService />} />
        <Route path="/amrita-gi-surgery" element={<AmritaGISurgeryService />} />
        <Route path="/sarvodaya-gi-surgery" element={<SarvodayaGISurgeryService />} />
        <Route path="/artemis-neurospine" element={<ArtemisNeuroSpineService />} />
        <Route path="/medanta-neurospine" element={<MedantaNeuroSpineService />} />
        <Route path="/apollo-neurospine" element={<ApolloNeuroSpineService />} />
        <Route path="/max-neurospine" element={<MaxNeuroSpineService />} />
        <Route path="/amrita-neurospine" element={<AmritaNeuroSpineService />} />
        <Route path="/sarvodaya-neurospine" element={<SarvodayaNeuroSpineService />} />
      </Routes>
    </Router>);

};

export default App;