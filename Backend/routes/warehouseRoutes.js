const express = require("express");
const router = express.Router();

const Warehouse = require("../models/Warehouse");

// GET ALL WAREHOUSES
router.get("/", async (req, res) => {
  try {
    const data = await Warehouse.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD WAREHOUSE
router.post("/", async (req, res) => {
  try {
    const warehouse = new Warehouse(req.body);

    await warehouse.save();

    res.status(201).json(warehouse);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE WAREHOUSE
router.put("/:id", async (req, res) => {
  try {
    const updatedWarehouse =
      await Warehouse.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
        }
      );

    res.json(updatedWarehouse);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE WAREHOUSE
router.delete("/:id", async (req, res) => {
  try {
    await Warehouse.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Warehouse Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;