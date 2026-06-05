import { useState } from "react";
import { addPurchaseOrder } from "../../services/purchaseOrderService";

function AddPurchaseOrderModal({
  orders,
  setOrders,
  onClose,
}) {
  const [form, setForm] = useState({
    poNumber: "",
    vendorName: "",
    itemName: "",
    itemCode: "",
    quantity: "",
    unitPrice: "",
    totalAmount: "",
    status: "Pending",
    orderDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    updatedForm.totalAmount =
      (Number(updatedForm.quantity) || 0) *
      (Number(updatedForm.unitPrice) || 0);

    setForm(updatedForm);
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const res = await addPurchaseOrder(form);

      setOrders([...orders, res.data]);

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to add purchase order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add Purchase Order</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>PO Number</label>
            <input
              name="poNumber"
              value={form.poNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Vendor Name</label>
            <input
              name="vendorName"
              value={form.vendorName}
              onChange={handleChange}
            />
          </div>

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
            <label>Total Amount</label>
            <input
              type="number"
              value={form.totalAmount}
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">
                Pending
              </option>
              <option value="Approved">
                Approved
              </option>
              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={form.orderDate}
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
              : "Save Purchase Order"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPurchaseOrderModal;