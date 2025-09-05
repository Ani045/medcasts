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
        
      </Routes>
    </Router>);

};

export default App;