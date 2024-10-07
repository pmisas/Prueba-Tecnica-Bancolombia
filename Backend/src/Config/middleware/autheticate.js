const jwt = require('jsonwebtoken');

// Middleware para autenticar el token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Si existe authHeader, toma el token

  // Depuración de los encabezados y el token
  console.log("Authorization Header:", authHeader); 
  console.log("Token:", token); 

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Error verificando token:", err); 
      return res.status(403).json({ message: 'Token no válido o expirado' });
    }

    console.log("Token verificado exitosamente:", user); 
    req.user = user; // Guardamos la información del usuario en la solicitud
    next(); // Continúa con el siguiente middleware o controlador
  });
}

// Middleware para autorizar basado en roles
function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Acceso denegado: no tienes los permisos adecuados' });
    }

    next(); // Continúa con el siguiente middleware o controlador si el rol es correcto
  };
}

module.exports = { authenticateToken, authorizeRole };
