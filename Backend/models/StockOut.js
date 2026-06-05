const mongoose = require("mongoose");

const stockOutSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },

  itemCode: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  department: {
    type: String,
  },

  reason: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "StockOut",
  stockOutSchema
);