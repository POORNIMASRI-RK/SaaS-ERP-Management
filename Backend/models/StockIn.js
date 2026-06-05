const mongoose = require("mongoose");

const stockInSchema = new mongoose.Schema(
  {
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
    unitPrice: {
      type: Number,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StockIn", stockInSchema);