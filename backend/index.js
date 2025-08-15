const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./App/routes/jobRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
