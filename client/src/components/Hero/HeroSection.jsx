import React from 'react';
import { ChevronRight, Target, Globe, BookOpen, Cpu } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const handleStartLearning = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMethodology = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      title: 'ОГЭ/ЕГЭ',
      subtitle: 'Высокие баллы',
      icon: Target,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    },
    {
      title: 'Путешествия',
      subtitle: 'Свободное общение',
      icon: Globe,
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    },
    {
      title: 'Разговорный',
      subtitle: 'Грамматика',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)',
    },
    {
      title: 'AI уроки',
      subtitle: 'Современные технологии',
      icon: Cpu,
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
    },
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Фоновые элементы */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-grid">
          {/* Левая колонка */}
          <div className="hero-content">
            <h1 className="hero-title">
              Язык будущего
              <span className="gradient-text">уже здесь</span>
            </h1>
            
            <p className="hero-description">
              Инновационные методики, персонализированный подход и гарантированный результат. 
              Освойте иностранные языки с современными технологиями.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="primary-button"
                onClick={handleStartLearning}
              >
                <span className="button-content">
                  Начать обучение
                  <ChevronRight className="button-icon" />
                </span>
              </button>
              
              <button 
                className="secondary-button"
                onClick={handleViewMethodology}
              >
                Посмотреть методику
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Учеников</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Успех</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Лет опыта</div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - карточки */}
          <div className="hero-cards-container">
            <div className="cards-grid">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="card"
                  style={{ background: card.gradient }}
                >
                  <div className="card-content">
                    <div className="card-text">
                      <div className="card-title">{card.title}</div>
                      <div className="card-subtitle">{card.subtitle}</div>
                    </div>
                    <div className="card-icon-wrapper">
                      <card.icon className="card-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Плавающие элементы */}
            <div className="floating-element floating-1"></div>
            <div className="floating-element floating-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;