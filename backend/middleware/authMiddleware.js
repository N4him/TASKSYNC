const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Autenticación requerida' });
  }

  try {
    const decoded = jwt.verify(token, 'secretKey'); // Reemplaza 'secretKey' con tu clave secreta
    req.user = { id: decoded.id }; // Asegúrate de que el token contiene el ID del usuario
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authenticateUser;
