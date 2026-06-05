import { useState } from "react";
import { addStockIn } from "../../services/stockInService";

function AddStockInModal({
  stockIn,
  setStockIn,
  onClose,
}) {
  const [form, setForm] = useState({
    itemName: "",
    itemCode: "",
    quantity: "",
    unitPrice: "",
    vendor: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      if (
        !form.itemName ||
        !form.itemCode ||
        !form.quantity ||
        !form.unitPrice ||
        !form.vendor
      ) {
        alert("Please fill all required fields");
        setLoading(false);
        return;
      }

      const res = await addStockIn(form);

      setStockIn([
        ...stockIn,
        res.data,
      ]);

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(
        error.response?.data?.message ||
          "Failed to add stock"
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Add Stock In</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Item Name</label>
            <input
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              placeholder="Enter Item Name"
            />
          </div>

          <div className="form-group">
            <label>Item Code</label>
            <input
              name="itemCode"
              value={form.itemCode}
              onChange={handleChange}
              placeholder="Enter Item Code"
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter Quantity"
            />
          </div>

          <div className="form-group">
            <label>Unit Price</label>
            <input
              type="number"
              name="unitPrice"
              value={form.unitPrice}
              onChange={handleChange}
              placeholder="Enter Unit Price"
            />
          </div>

          <div className="form-group">
            <label>Vendor</label>
            <input
              name="vendor"
              value={form.vendor}
              onChange={handleChange}
              placeholder="Enter Vendor Name"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="modal-actions">

          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : "Save Stock In"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddStockInModal;