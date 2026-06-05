const express = require("express");
const router = express.Router();

const StockIn = require("../models/StockIn");
const Inventory = require("../models/Inventory");

router.get("/", async (req, res) => {
  try {
    const stock = await StockIn.find();

    res.json(stock);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const stockIn = new StockIn(req.body);

    await stockIn.save();

    const inventoryItem = await Inventory.findOne({
      itemCode: req.body.itemCode,
    });

    if (inventoryItem) {
      inventoryItem.quantity += Number(req.body.quantity);

      await inventoryItem.save();
    }

    res.status(201).json(stockIn);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await StockIn.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await StockIn.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;