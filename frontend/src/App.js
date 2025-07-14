import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import InfoPage from './components/InfoPage';
import ProductSetupPage from './components/ProductSetupPage';
import WebsiteGeneratorPage from './components/WebsiteGeneratorPage';
import PreviewPage from './components/PreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/product-setup" element={<ProductSetupPage />} />
        <Route path="/website-generator" element={<WebsiteGeneratorPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
