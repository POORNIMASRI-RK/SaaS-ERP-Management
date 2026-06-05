import { useState } from "react";
import { updatePurchaseOrder } from "../../services/purchaseOrderService";

function EditPurchaseOrderModal({
  order,
  orders,
  setOrders,
  onClose,
}) {
  const [form, setForm] = useState({
    poNumber: order.poNumber || "",
    vendorName: order.vendorName || "",
    itemName: order.itemName || "",
    itemCode: order.itemCode || "",
    quantity: order.quantity || "",
    unitPrice: order.unitPrice || "",
    totalAmount: order.totalAmount || "",
    status: order.status || "",
    orderDate: order.orderDate
      ? order.orderDate.split("T")[0]
      : "",
  });

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

  const handleUpdate = async () => {
    try {
      const res =
        await updatePurchaseOrder(
          order._id,
          form
        );

      setOrders(
        orders.map((o) =>
          o._id === order._id
            ? res.data
            : o
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

        <h2>Edit Purchase Order</h2>

        <div className="form-grid">

          <input
            name="poNumber"
            value={form.poNumber}
            onChange={handleChange}
          />

          <input
            name="vendorName"
            value={form.vendorName}
            onChange={handleChange}
          />

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
            type="number"
            name="unitPrice"
            value={form.unitPrice}
            onChange={handleChange}
          />

          <input
            type="number"
            value={form.totalAmount}
            readOnly
          />

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

          <input
            type="date"
            name="orderDate"
            value={form.orderDate}
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
            Update Purchase Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditPurchaseOrderModal;