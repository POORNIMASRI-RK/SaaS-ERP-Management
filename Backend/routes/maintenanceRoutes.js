const express = require("express");
const router = express.Router();
const Maintenance = require("../models/Maintenance");

// Add Maintenance
router.post("/", async (req, res) => {
  const data = await Maintenance.create(req.body);
  res.json(data);
});

// Get Maintenance Records
router.get("/", async (req, res) => {
  const data = await Maintenance.find().populate("machineId");
  res.json(data);
});

// Update Status
router.put("/:id", async (req, res) => {
  const updated = await Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;