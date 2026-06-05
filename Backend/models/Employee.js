const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  employeeId: String,
  gender: String,
  department: String,
  email: String,
});

module.exports = mongoose.model("Employee", employeeSchema);