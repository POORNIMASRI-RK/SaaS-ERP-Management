const express = require("express");
const router = express.Router();
const Machine = require("../models/Machine");

// Add Machine
router.post("/", async (req, res) => {
  const machine = await Machine.create(req.body);
  res.json(machine);
});

// Get Machines
router.get("/", async (req, res) => {
  const machines = await Machine.find();
  res.json(machines);
});

// Update Machine
router.put("/:id", async (req, res) => {
  const updated = await Machine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete Machine
router.delete("/:id", async (req, res) => {
  await Machine.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;