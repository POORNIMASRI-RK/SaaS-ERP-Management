const express = require("express");
const router = express.Router();

const StockOut = require("../models/StockOut");
const Inventory = require("../models/Inventory");

router.get("/", async (req, res) => {
  try {
    const stockOut = await StockOut.find();
    res.json(stockOut);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const stockOut = new StockOut(req.body);

    await stockOut.save();

    const inventoryItem =
      await Inventory.findOne({
        itemCode: req.body.itemCode,
      });

    if (inventoryItem) {
      inventoryItem.quantity -= Number(
        req.body.quantity
      );

      await inventoryItem.save();
    }

    res.status(201).json(stockOut);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated =
      await StockOut.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
        }
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
    await StockOut.findByIdAndDelete(
      req.params.id
    );

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