const { ALLOWED_ADMIN_EMAILS } = require('../config/database');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  console.log('Проверка аутентификации, токен:', token ? 'присутствует' : 'отсутствует');
  
  // Если токена нет, возвращаем ошибку
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Требуется авторизация. Пожалуйста, войдите в систему.'
    });
  }
  
  // Проверяем, что токен валидный и начинается с admin_token_
  if (token && token.startsWith('admin_token_')) {
    try {
      const tokenData = token.split('admin_token_')[1];
      
      // Декодируем base64
      const decodedString = Buffer.from(tokenData, 'base64').toString('utf-8');
      const decoded = JSON.parse(decodedString);
      
      console.log('Декодированный токен:', decoded);
      
      // Проверяем email и срок действия токена (24 часа)
      const tokenAge = Date.now() - decoded.timestamp;
      const maxTokenAge = 24 * 60 * 60 * 1000; 
      
      if (!ALLOWED_ADMIN_EMAILS || !Array.isArray(ALLOWED_ADMIN_EMAILS)) {
        console.error('ALLOWED_ADMIN_EMAILS не настроен или не является массивом');
        return res.status(500).json({
          success: false,
          message: 'Ошибка конфигурации сервера'
        });
      }
      
      if (ALLOWED_ADMIN_EMAILS.includes(decoded.email) && tokenAge < maxTokenAge) {
        req.user = { 
          username: decoded.username || 'Администратор', 
          email: decoded.email,
          role: 'admin' 
        };
        console.log('Пользователь авторизован:', req.user.email);
        next();
      } else if (tokenAge >= maxTokenAge) {
        console.log('Токен истек, возраст:', tokenAge);
        return res.status(401).json({
          success: false,
          message: 'Сессия истекла. Пожалуйста, войдите снова.'
        });
      } else {
        console.log('Email не найден в разрешенных:', decoded.email);
        return res.status(403).json({
          success: false,
          message: 'Доступ запрещен. У вас нет прав для доступа к админке.'
        });
      }
    } catch (error) {
      console.error('Ошибка декодирования токена:', error.message);
      return res.status(401).json({
        success: false,
        message: 'Неверный токен авторизации'
      });
    }
  } else {
    console.log('Неверный формат токена');
    return res.status(401).json({
      success: false,
      message: 'Неверный фортокен авторизации'
    });
  }
};

module.exports = {
  authenticate
};