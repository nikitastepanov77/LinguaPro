import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'services', 'methodology', 'results', 'rules', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'methodology', label: 'Методика' },
    { id: 'results', label: 'Результаты' },
    { id: 'rules', label: 'Правила' },
    { id: 'contact', label: 'Контакты' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrollY > 50 ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon">
              <Globe className="icon-globe" />
            </div>
            <span className="logo-text">
              LinguaPro
            </span>
          </div>
          
          <nav className="header-nav desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
            >
              Начать обучение
            </button>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="header-nav mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="cta-button mobile-cta"
              onClick={() => scrollToSection('contact')}
            >
              Начать обучение
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;