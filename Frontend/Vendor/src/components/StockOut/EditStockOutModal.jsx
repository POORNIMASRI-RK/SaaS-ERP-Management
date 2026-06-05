import { useState } from "react";
import { updateStockOut } from "../../services/stockOutService";

function EditStockOutModal({
  item,
  stockOut,
  setStockOut,
  onClose,
}) {
  const [form, setForm] = useState({
    itemName: item.itemName,
    itemCode: item.itemCode,
    quantity: item.quantity,
    department: item.department,
    reason: item.reason,
    date: item.date
      ? item.date.split("T")[0]
      : "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const res = await updateStockOut(
        item._id,
        form
      );

      setStockOut(
        stockOut.map((s) =>
          s._id === item._id
            ? res.data
            : s
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to update");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Edit Stock Out</h2>

        <div className="form-grid">

          <input
            name="itemName"
            value={form.itemName}
            onChange={handleChange}
          />

          <input
            name="itemCode"
            value={form.itemCode}
            onChange={handleChange}
          />

          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
          />

          <input
            name="department"
            value={form.department}
            onChange={handleChange}
          />

          <input
            name="reason"
            value={form.reason}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

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
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditStockOutModal;