import { useState } from "react";
import { updateInventory } from "../../services/inventoryService";

function EditInventoryModal({
  item,
  inventory,
  setInventory,
  onClose,
}) {
  const [form, setForm] = useState({
    itemName: item.itemName || "",
    itemCode: item.itemCode || "",
    price: item.price || "",
    quantity: item.quantity || "",
    lowStockLimit: item.lowStockLimit || "",
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

      const res = await updateInventory(item._id, form);

      // ✅ SAME PATTERN AS EMPLOYEE
      setInventory(
        inventory.map((i) =>
          i._id === item._id ? res.data : i
        )
      );

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Failed to update inventory");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Edit Inventory</h2>

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
            <label>Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Low Stock Limit</label>
            <input
              name="lowStockLimit"
              value={form.lowStockLimit}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="modal-actions">

          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Inventory"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditInventoryModal;