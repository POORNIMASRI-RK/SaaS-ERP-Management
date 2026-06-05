const express = require("express");
const router = express.Router();

const Inventory =
  require("../models/Inventory");

router.get("/", async (req, res) => {
  const data =
    await Inventory.find();

  res.json(data);
});

router.post("/", async (req, res) => {
  const item =
    await Inventory.create(req.body);

  res.json(item);
});

router.put("/:id", async (req, res) => {
  const item =
    await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await Inventory.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted",
  });
});

module.exports = router;