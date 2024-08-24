const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
  try {
    // Extract token from cookies
    const token = req.cookies?.token;
    
    // If token is not present, return 401
    if (!token) {
      return res.status(401).json({
        message: "Please Login...!",
        error: true,
        success: false
      });
    }

    console.log("Token received:", token);

    // Verify the token using the secret key
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("Token verification error:", err);
        return res.status(403).json({
          message: "Failed to authenticate token",
          error: true,
          success: false
        });
      }

      // If token is valid, attach user ID to request
      req.userId = decoded?._id;
      console.log("Decoded user ID:", req.userId); // For debugging
      next();
    });
    
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(500).json({
      message: err.message || 'Internal Server Error',
      error: true,
      success: false
    });
  }
}

module.exports = authToken;
