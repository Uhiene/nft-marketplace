import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DiscoverNFTs from './pages/DiscoverNFTs';
import MintNFTs from './pages/MintNFTs';
import ListNFTs from './pages/ListNFTs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discovery" element={<DiscoverNFTs />} />
        <Route path="/mint" element={<MintNFTs />} />
        <Route path="/list" element={<ListNFTs />} />
      </Routes>
    </Router>
  );
}

export default App;
