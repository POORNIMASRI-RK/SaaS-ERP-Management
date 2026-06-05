const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const vendorRoutes = require("./routes/vendorRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const stockInRoutes = require("./routes/stockInRoutes");
const stockOutRoutes = require("./routes/stockOutRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/erp")
  .then(() => console.log("MongoDB Connected"));

app.use("/api/vendors", vendorRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/stockin", stockInRoutes);
app.use("/api/stockout", stockOutRoutes);
app.use("/api/purchaseorders", purchaseOrderRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});