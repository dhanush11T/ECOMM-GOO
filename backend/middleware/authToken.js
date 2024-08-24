const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "Please Login...!",
        error: true,
        success: false
      });
    }

    console.log("token----", token);

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
      if (err) {
        console.log("error auth", err);
        return res.status(403).json({
          message: "Failed to authenticate token",
          error: true,
          success: false
        });
      }

      req.userId = decoded?._id;
      next();
    });
    
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
}

module.exports = authToken;
