import React, { useState } from 'react';
import { Globe, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Modal from '../Modal/Modal';
import './Footer.css';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const socialLinks = [
    { 
      icon: <Phone size={18} />, 
      label: 'Телефон', 
      onClick: () => window.open('tel:+79595203182', '_self')
    },
    { 
      icon: <Mail size={18} />, 
      label: 'Почта', 
      onClick: () => window.open('mailto:daria.gritsaenko2000@gmail.com', '_self')
    }
  ];

  const quickLinks = [
    { label: 'Обо мне', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Результаты', href: '#results' },
    { label: 'Методика', href: '#methodology' },
    { label: 'Контакты', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-background">
          <div className="footer-ornament footer-ornament-1"></div>
          <div className="footer-ornament footer-ornament-2"></div>
        </div>
        
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo" onClick={scrollToTop}>
                <div className="logo-icon">
                  <Globe className="icon-globe" />
                </div>
                <span className="logo-text">LinguaPro</span>
              </div>
              <p className="footer-description">
                Профессиональное обучение английскому и испанскому языку с индивидуальным подходом 
                и гарантированным результатом.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url || "#"}
                    className="social-link"
                    aria-label={social.label}
                    onClick={(e) => {
                      if (social.onClick) {
                        e.preventDefault();
                        social.onClick();
                      }
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Быстрые ссылки</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-title">Контакты</h4>
              <ul className="contact-list">
                <li className="contact-item">
                  <Phone className="contact-icon" />
                  <a href="tel:+79595203182" className="contact-link">
                    +7 (959) 520-31-82
                  </a>
                </li>
                <li className="contact-item">
                  <Mail className="contact-icon" />
                  <a href="mailto:daria.gritsaenko2000@gmail.com" className="contact-link">
                    daria.gritsaenko2000@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <MessageSquare className="contact-icon" />
                  <a 
                    href="https://www.instagram.com/hi.hola.dasha?igsh=MXVia255aDBkdTRnYQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Instagram: hi.hola.dasha
                  </a>
                </li>
                <li className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>Луганск, онлайн занятия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {new Date().getFullYear()} LinguaPro. Все права защищены.
              </p>
              <div className="footer-legal">
                <button 
                  className="legal-link" 
                  onClick={() => setIsPrivacyModalOpen(true)}
                >
                  Политика конфиденциальности
                </button>
                <button 
                  className="legal-link" 
                  onClick={() => setIsTermsModalOpen(true)}
                >
                  Условия использования
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Политика конфиденциальности"
      >
        <div className="modal-section">
          <h4>1. Общие положения</h4>
          <p>
            Настоящая политика конфиденциальности определяет порядок обработки и защиты 
            информации о пользователях, которую может получить LinguaPro при использовании 
            услуг сайта.
          </p>
          <p>
            Используя услуги сайта, вы даете согласие на обработку ваших персональных 
            данных в соответствии с настоящей политикой конфиденциальности.
          </p>
        </div>

        <div className="modal-section">
          <h4>2. Собираемая информация</h4>
          <p>Мы можем собирать следующую информацию:</p>
          <ul>
            <li>Имя, фамилия и контактные данные</li>
            <li>Адрес электронной почты</li>
            <li>Номер телефона</li>
            <li>Данные об используемом устройстве и браузере</li>
            <li>История посещения сайта и предпочтения</li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>3. Использование информации</h4>
          <p>Собранная информация используется для:</p>
          <ul>
            <li>Предоставления и улучшения наших услуг</li>
            <li>Обработки запросов и заявок</li>
            <li>Отправки информационных материалов</li>
            <li>Проведения аналитики для улучшения работы сайта</li>
            <li>Связи с пользователями при необходимости</li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>4. Защита информации</h4>
          <p>
            Мы принимаем необходимые организационные и технические меры для защиты 
            ваших персональных данных от несанкционированного доступа, изменения, 
            раскрытия или уничтожения.
          </p>
        </div>

        <div className="modal-section">
          <h4>5. Раскрытие информации третьим лицам</h4>
          <p>
            Мы не продаем, не обмениваем и не передаем личные данные пользователей 
            третьим лицам, за исключением случаев, предусмотренных законодательством 
            Российской Федерации.
          </p>
        </div>

        <div className="modal-section">
          <h4>6. Изменения в политике конфиденциальности</h4>
          <p>
            Мы оставляем за собой право вносить изменения в настоящую политику 
            конфиденциальности. Изменения вступают в силу с момента их публикации 
            на сайте.
          </p>
        </div>

        <div className="modal-section">
          <h4>7. Контакты</h4>
          <p>
            По всем вопросам, связанным с политикой конфиденциальности, вы можете 
            связаться с нами по электронной почты: 
            <a href="mailto:daria.gritsaenko2000@gmail.com"> daria.gritsaenko2000@gmail.com</a>
          </p>
          <p>
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Условия использования"
      >
        <div className="modal-section">
          <h4>1. Общие положения</h4>
          <p>
            Настоящие условия использования регулируют порядок использования услуг, 
            предоставляемых LinguaPro через наш сайт. Используя наш сайт, вы соглашаетесь 
            с этими условиями.
          </p>
        </div>

        <div className="modal-section">
          <h4>2. Услуги</h4>
          <p>
            LinguaPro предоставляет услуги по обучению английскому языку, включая:
          </p>
          <ul>
            <li>Индивидуальные занятия онлайн</li>
            <li>Групповые курсы</li>
            <li>Консультации по изучению языка</li>
            <li>Подготовку к международным экзаменам</li>
            <li>Корпоративное обучение</li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>3. Регистрация и учетная запись</h4>
          <p>Для получения доступа к некоторым услугам требуется регистрация.</p>
          <p>Вы обязаны:</p>
          <ul>
            <li>Предоставлять точную и полную информацию при регистрации</li>
            <li>Обновлять информацию при ее изменении</li>
            <li>Обеспечивать безопасность своей учетной записи</li>
            <li>Немедленно сообщать о любом несанкционированном доступе</li>
          </ul>
        </div>

        <div className="modal-section">
          <h4>4. Оплата услуг</h4>
          <p>
            Стоимость услуг указывается на сайте и может изменяться. Оплата производится 
            в соответствии с выбранным тарифом и условиями договора.
          </p>
          <p>
            Возврат средств осуществляется в соответствии с законодательством РФ и 
            условиями договора на оказание услуг.
          </p>
        </div>

        <div className="modal-section">
          <h4>5. Интеллектуальная собственность</h4>
          <p>
            Все материалы, размещенные на сайте (тексты, изображения, видео, дизайн), 
            являются интеллектуальной собственностью LinguaPro и защищены авторским правом.
          </p>
          <p>
            Запрещается копирование, распространение или использование материалов сайта 
            без предварительного письменного разрешения.
          </p>
        </div>

        <div className="modal-section">
          <h4>6. Ограничение ответственности</h4>
          <p>
            LinguaPro не гарантирует бесперебойную работу сайта и не несет ответственности 
            за временные технические сбои.
          </p>
          <p>
            Результаты обучения зависят от индивидуальных способностей и усилий ученика.
          </p>
        </div>

        <div className="modal-section">
          <h4>7. Изменение условий</h4>
          <p>
            Мы оставляем за собой право изменять настоящие условия использования. 
            Продолжение использования сайта после внесения изменений означает ваше 
            согласие с новыми условиями.
          </p>
        </div>

        <div className="modal-section">
          <h4>8. Контакты</h4>
          <p>
            По вопросам, связанным с условиями использования, обращайтесь:
            <br />
            Email: <a href="mailto:daria.gritsaenko2000@gmail.com">daria.gritsaenko2000@gmail.com</a>
            <br />
            Телефон: <a href="tel:+79595203182">+7 (959) 520-31-82</a>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;