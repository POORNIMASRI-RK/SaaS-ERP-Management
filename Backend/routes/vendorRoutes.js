const express = require("express");

const router = express.Router();

const {
  getVendors,
  getVendor,
  createVendor,
  updateVendor,
  deleteVendor,
} = require("../controllers/vendorController");

router.get("/", getVendors);

router.get("/:id", getVendor);

router.post("/", createVendor);

router.put("/:id", updateVendor);

exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json(error);
  }
};

router.delete("/:id", deleteVendor);

module.exports = router;