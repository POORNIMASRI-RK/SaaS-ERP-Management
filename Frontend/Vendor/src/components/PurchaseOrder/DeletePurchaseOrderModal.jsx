import { deletePurchaseOrder } from "../../services/purchaseOrderService";

function DeletePurchaseOrderModal({
  order,
  orders,
  setOrders,
  onClose,
}) {
  const handleDelete = async () => {
    try {
      await deletePurchaseOrder(
        order._id
      );

      setOrders(
        orders.filter(
          (o) => o._id !== order._id
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert(
        "Failed to delete purchase order"
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        <div className="delete-icon">
          📄
        </div>

        <h2>Delete Purchase Order</h2>

        <p>
          Are you sure you want to delete
          <strong>
            {" "}
            {order.poNumber}
          </strong>
          ?
        </p>

        <div className="modal-actions">

          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeletePurchaseOrderModal;