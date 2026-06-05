import { useState } from "react";
import { addInventory } from "../../services/inventoryService";

function AddInventoryModal({ inventory, setInventory, onClose }) {
  const [form, setForm] = useState({
    itemName: "",
    itemCode: "",
    price: "",
    quantity: "",
    lowStockLimit: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // ✅ Validation (same as Employee style)
      if (!form.itemName || !form.itemCode || !form.quantity) {
        alert("Please fill required fields");
        setLoading(false);
        return;
      }

      const res = await addInventory(form);

      // ✅ update UI instantly (same pattern as employee)
      setInventory([...inventory, res.data]);

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.response?.data?.message || "Failed to add inventory");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Add Inventory</h2>

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
            <label>Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter Price"
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter Quantity"
            />
          </div>

          <div className="form-group">
            <label>Low Stock Limit</label>
            <input
              name="lowStockLimit"
              value={form.lowStockLimit}
              onChange={handleChange}
              placeholder="Enter Minimum Stock"
            />
          </div>

        </div>

        <div className="modal-actions">

          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Inventory"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddInventoryModal;