const Vendor = require("../models/Vendor");

// GET ALL
exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ONE
exports.getVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({
        message: "Vendor not found",
      });
    }

    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE
exports.createVendor = async (req, res) => {
  try {

    const existingVendor = await Vendor.findOne({
      registrationNumber: req.body.registrationNumber,
    });

    if (existingVendor) {
      return res.status(400).json({
        message: "Registration Number already exists",
      });
    }

    const vendor = await Vendor.create(req.body);

    res.status(201).json(vendor);

  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE
exports.updateVendor = async (req, res) => {
  try {

    const existingVendor = await Vendor.findOne({
      registrationNumber: req.body.registrationNumber,
      _id: { $ne: req.params.id },
    });

    if (existingVendor) {
      return res.status(400).json({
        message: "Registration Number already exists",
      });
    }

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

// DELETE
exports.deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Vendor deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};