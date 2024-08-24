const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to set CORS headers manually


// Middleware
app.use(cors({
  origin: 'https://ecomm-goo-git-main-dhanush11ts-projects.vercel.app',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something went wrong! Error: ${err.message}`);
});

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to MongoDB");
      console.log(`Server is running on http://localhost:${PORT}`);
   ​⬤
