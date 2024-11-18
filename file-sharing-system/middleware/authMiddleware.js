const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify the JWT token
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header (format: "Bearer <token>")
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user data (from the token) to the request object
    req.user = decoded.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification failure
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
