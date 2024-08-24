const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB() {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(dbUri, {
      // Remove deprecated options
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;
