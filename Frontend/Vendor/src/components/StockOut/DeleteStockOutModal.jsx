import { deleteStockOut } from "../../services/stockOutService";

function DeleteStockOutModal({
  item,
  stockOut,
  setStockOut,
  onClose,
}) {
  const handleDelete = async () => {
    try {
      await deleteStockOut(item._id);

      setStockOut(
        stockOut.filter(
          (s) => s._id !== item._id
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to delete");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        <div className="delete-icon">
          📦
        </div>

        <h2>Delete Stock Out</h2>

        <p>
          Are you sure you want to delete
          <strong>
            {" "}
            {item.itemName}
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

export default DeleteStockOutModal;