import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import MethodologySection from './components/Methodology/MethodologySection';
import ResultsSection from './components/Results/ResultsSection';
import RulesSection from './components/RulesSection/RulesSection'; // Добавьте эту строку
import ContactSection from './components/Contact/ContactSection';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Маршрут для админ-панели */}
          <Route path="/admin" element={<AdminPanel />} />
          
          {/* Маршрут для основной страницы */}
          <Route path="/*" element={
            <>
              <Header />
              <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <MethodologySection />
                <ResultsSection />
                <RulesSection /> {/* Добавьте эту строку */}
                <ContactSection />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;