const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied"
  },
  date: {
    type: Date,
    default: Date.now // ✅ store creation date automatically
  }
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
