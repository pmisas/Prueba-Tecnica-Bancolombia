const jwt = require('jsonwebtoken');


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log("Auth Header:", authHeader); 
  console.log("Token:", token); 
  if (!token) {
      return res.sendStatus(401); 
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          console.log("Error verifying token:", err, token); 
          return res.sendStatus(403); 
      }
      console.log("Token verified successfully!"); 
      req.user = user;
      next(); 
  });
}


function authorizeRole(role) {
  return (req, res, next) => {
      if (!req.user) {
          return res.sendStatus(401); // Unauthorized
      }
      if (req.user.role !== role) {
          return res.sendStatus(403); // Forbidden
      }
      next(); // El usuario tiene el rol adecuado, continuar con el siguiente middleware
  }
}

module.exports = { authenticateToken, authorizeRole };
