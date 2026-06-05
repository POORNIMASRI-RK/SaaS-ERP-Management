const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema({
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine"
  },
  issue: String,
  maintenanceType: String, // Preventive | Breakdown | Repair
  startDate: Date,
  endDate: Date,
  cost: Number,
  status: {
    type: String,
    default: "Pending"
  },
  technician: String
});

module.exports = mongoose.model("Maintenance", MaintenanceSchema);