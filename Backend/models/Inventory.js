const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  itemName: String,
  itemCode: String,
  price: Number,
  quantity: Number,
  lowStockLimit: Number,
  vendorName: String,
});

module.exports = mongoose.model(
  "Inventory",
  inventorySchema
);