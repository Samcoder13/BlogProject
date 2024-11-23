const users=require('../models/userSchema');
const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
      const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  jwt.verify(token, process.env.SECRET_KEY, async(err, data) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    req.body.email=data.email;
      next();

  });
};

module.exports = authenticateToken;