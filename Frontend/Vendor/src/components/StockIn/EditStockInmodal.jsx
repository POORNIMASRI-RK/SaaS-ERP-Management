import { useState } from "react";
import { updateStockIn } from "../../services/stockInService";

function EditStockInModal({
  item,
  stockIn,
  setStockIn,
  onClose,
}) {
  const [form, setForm] = useState({
    itemName: item.itemName || "",
    itemCode: item.itemCode || "",
    quantity: item.quantity || "",
    unitPrice: item.unitPrice || "",
    vendor: item.vendor || "",
    date: item.date
      ? item.date.split("T")[0]
      : "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await updateStockIn(
        item._id,
        form
      );

      setStockIn(
        stockIn.map((s) =>
          s._id === item._id
            ? res.data
            : s
        )
      );

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Failed to update stock");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Edit Stock In</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Item Name</label>
            <input
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Item Code</label>
            <input
              name="itemCode"
              value={form.itemCode}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Unit Price</label>
            <input
              type="number"
              name="unitPrice"
              value={form.unitPrice}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Vendor</label>
            <input
              name="vendor"
              value={form.vendor}
              onChange={handleChange}
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
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Stock In"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditStockInModal;