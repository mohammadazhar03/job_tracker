const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./App/routes/jobRoutes");

const app = express();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Vite local dev
  "https://job-trackerapi.netlify.app", // production frontend URL
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// Routes
app.use("/api/jobs", jobRoutes);

mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error(err));
