const express = require("express");
const { getJobs, addJob, deleteJob } = require("../controller/jobController");

const router = express.Router();

router.get("/", getJobs);
router.post("/", addJob);
router.delete("/:id", deleteJob);

module.exports = router;
