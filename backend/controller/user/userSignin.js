const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    console.log("checkPassword", checkPassword);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      console.log("tokenData", tokenData);
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

      // Log the secret key (for debugging purposes only; remove this in production)
      console.log("Token Secret Key:", process.env.TOKEN_SECRET_KEY);

      const tokenOption = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set based on environment
        sameSite: 'Strict', // Adjust as necessary
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });

    } else {
      throw new Error("Incorrect password");
    }

  } catch (err) {
    console.error(err); // Log error to server console for debugging
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
