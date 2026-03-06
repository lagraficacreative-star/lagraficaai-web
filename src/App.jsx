import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import ForAgencies from './components/ForAgencies';
import CustomSolutions from './components/CustomSolutions';
import Contact from './components/Contact';
import VideoSection from './components/VideoSection';
import GalleryPreview from './components/GalleryPreview';
import Portfolio from './pages/Portfolio';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

import Navbar from './components/Navbar';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <div id="inicio"><Hero /></div>
            <div id="servicios"><Services /></div>
            <div id="soluciones"><CustomSolutions /></div>
            <VideoSection />
            <div id="portfolio"><GalleryPreview /></div>
            <div id="agencias"><ForAgencies /></div>
          </main>
        } />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
      </Routes>
      <footer id="contacto">
        <Contact />
      </footer>
      <WhatsAppWidget />
    </>
  );
}

export default App;
