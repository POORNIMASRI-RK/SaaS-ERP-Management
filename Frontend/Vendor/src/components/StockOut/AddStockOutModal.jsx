import { useState } from "react";
import { addStockOut } from "../../services/stockOutService";

function AddStockOutModal({
  stockOut,
  setStockOut,
  onClose,
}) {
  const [form, setForm] = useState({
    itemName: "",
    itemCode: "",
    quantity: "",
    department: "",
    reason: "",
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

      const res = await addStockOut(form);

      setStockOut([
        ...stockOut,
        res.data,
      ]);

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to add stock out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add Stock Out</h2>

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
            <label>Department</label>
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Reason</label>
            <input
              name="reason"
              value={form.reason}
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
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddStockOutModal;