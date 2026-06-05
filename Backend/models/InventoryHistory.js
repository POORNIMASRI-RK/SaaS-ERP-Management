const mongoose = require("mongoose");

const inventoryHistorySchema =
  new mongoose.Schema(
    {
      inventoryId: String,
      action: String,
      quantity: Number,
      date: {
        type: Date,
        default: Date.now,
      },
    }
  );

module.exports = mongoose.model(
  "InventoryHistory",
  inventoryHistorySchema
);