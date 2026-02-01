import React from 'react';
import { User, Award, Globe, BookOpen, Star, GraduationCap, MessageSquare, Target, Users, Instagram } from 'lucide-react';
import teacherAvatar from '../../images/IMG_20260123_112111_476.JPG';
import './AboutSection.css';

const AboutSection = () => {
  const qualifications = [
    { icon: <GraduationCap />, text: 'Диплом лингвистического университета' },
    { icon: <Award />, text: 'Сертифицированный преподаватель английского и испанского' },
    { icon: <Globe />, text: 'Студенты по всему миру' },
    { icon: <BookOpen />, text: 'Индивидуальная программа для каждого ученика' },
    { icon: <Users />, text: 'Опыт работы со взрослыми, подростками и детьми 7+' },
    { icon: <Target />, text: 'Подготовка к экзаменам' },
  ];

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/hi.hola.dasha?igsh=MXVia255aDBkdTRnYQ==', '_blank');
  };

  const handleInstagramClick = (e) => {
    e.preventDefault();
    openInstagram();
  };

  return (
    <section id="about" className="as-section">
      <div className="as-container">
        <div className="as-header">
          <h2 className="as-section-title">О преподавателе</h2>
          <p className="as-section-subtitle">
            Профессиональный репетитор английского и испанского языков
          </p>
        </div>

        <div className="as-content">
          <div className="as-photo">
            <div className="as-photo-frame">
              <div className="as-photo-placeholder">
                {/* Аватарка преподавателя */}
                <div className="as-teacher-avatar">
                  <img 
                    src={teacherAvatar} 
                    alt="Дарья Александровна - репетитор английского и испанского" 
                    className="as-avatar-image"
                  />
                </div>
                <div className="as-languages">
                  <span className="as-language">EN</span>
                  <span className="as-language">ES</span>
                </div>
              </div>
              <div className="as-photo-badge">
                <MessageSquare className="as-badge-icon" />
                Заговори без страха!
              </div>
            </div>

            {/* Ссылка на Instagram под фото */}
            <div className="as-instagram-under-photo">
              <a 
                href="https://www.instagram.com/hi.hola.dasha?igsh=MXVia255aDBkdTRnYQ==" 
                className="as-instagram-link"
                onClick={handleInstagramClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="as-instagram-link-icon" />
                <span className="as-instagram-link-text">@hi.hola.dasha</span>
              </a>
            </div>

            <div className="as-photo-ornaments">
              <div className="as-ornament as-ornament-1"></div>
              <div className="as-ornament as-ornament-2"></div>
              <div className="as-ornament as-ornament-3"></div>
            </div>
          </div>

          <div className="as-info">
            <div className="as-name-section">
              <a 
                href="https://www.instagram.com/hi.hola.dasha?igsh=MXVia255aDBkdTRnYQ==" 
                className="as-username"
                onClick={handleInstagramClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="as-instagram-icon" />
                hi.hola.dasha
              </a>
              <h3 className="as-name">Дарья Александровна</h3>
              <p className="as-title">Репетитор по английскому и испанскому языкам | онлайн</p>
            </div>

            <div className="as-specialization">
              <div className="as-specialization-item">
                <Star className="as-specialization-icon" />
                <span>Изучай язык с нуля пошагово</span>
              </div>
              <div className="as-specialization-item">
                <Users className="as-specialization-icon" />
                <span>Взрослые / Подростки / Дети 7+</span>
              </div>
              <div className="as-specialization-item">
                <Target className="as-specialization-icon" />
                <span>Подготовка к экзаменам</span>
              </div>
            </div>

            <p className="as-description">
              Здравствуйте! Я профессиональный репетитор английского и испанского языков 
              с опытом онлайн-преподавания студентам по всему миру. Специализируюсь на 
              обучении с нуля по авторской методике, которая помогает преодолеть языковой 
              барьер и начать говорить без страха.
            </p>

            <p className="as-description">
              Моя цель — сделать изучение языков увлекательным и доступным для каждого. 
              Использую современные материалы, интерактивные задания и индивидуальный 
              подход. Верю, что заговорить на иностранном языке может каждый — 
              нужны только правильный подход и поддержка преподавателя.
            </p>

            <div className="as-qualifications">
              <h4 className="as-qualifications-title">Квалификация и подход:</h4>
              <div className="as-qualifications-grid">
                {qualifications.map((item, index) => (
                  <div key={index} className="as-qualification-item">
                    <div className="as-qualification-icon">{item.icon}</div>
                    <span className="as-qualification-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;