import React from 'react';
import { BookOpen, Users, Cpu, TrendingUp } from 'lucide-react';
import './MethodologySection.css';

const MethodologySection = () => {
  const methods = [
    {
      icon: <BookOpen />,
      title: 'Персонализация',
      description: 'Индивидуальная программа для каждого ученика с учетом целей и интересов',
      color: '#06B6D4'
    },
    {
      icon: <Users />,
      title: 'Коммуникативный метод',
      description: 'Упор на разговорную практику и реальные жизненные ситуации',
      color: '#0EA5E9'
    },
    {
      icon: <Cpu />,
      title: 'Современные технологии',
      description: 'Использование интерактивных материалов и обучающих платформ',
      color: '#F59E0B'
    },
    {
      icon: <TrendingUp />,
      title: 'Постоянный прогресс',
      description: 'Регулярные тестирования и корректировка плана обучения',
      color: '#10B981'
    }
  ];

  return (
    <section className="methodology-section">
      <div className="methodology-container">
        <div className="methodology-header">
          <h2 className="section-title">Методика обучения</h2>
        </div>

        <div className="methodology-content">
          <div className="methodology-intro">
            <div className="intro-card">
              <h3>Почему моя методика работает?</h3>
              <p>
                Я использую комбинацию проверенных методов и современных подходов, 
                которая позволяет достигать видимых результатов уже после первых занятий.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">2x</div>
                  <div className="stat-label">Быстрее прогресс</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Успех в достижении целей</div>
                </div>
              </div>
            </div>
          </div>

          <div className="methods-grid">
            {methods.map((method, index) => (
              <div 
                key={index} 
                className="method-card"
                style={{ '--method-color': method.color }}
              >
                <div 
                  className="method-icon-wrapper"
                  style={{ 
                    background: `linear-gradient(135deg, ${method.color}20, ${method.color}10)`,
                    borderColor: `${method.color}30`
                  }}
                >
                  <div className="method-icon" style={{ color: method.color }}>
                    {method.icon}
                  </div>
                </div>
                <h4 className="method-title">{method.title}</h4>
                <p className="method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologySection;