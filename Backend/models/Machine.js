const mongoose = require("mongoose");

const MachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  model: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["Active", "Under Maintenance", "Breakdown"],
    default: "Active"
  },

  location: {
    type: String,
    required: true
  },

  lastServiceDate: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model("Machine", MachineSchema);