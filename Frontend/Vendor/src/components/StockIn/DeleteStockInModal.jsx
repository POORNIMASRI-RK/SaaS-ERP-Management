import { deleteStockIn } from "../../services/stockInService";

function DeleteStockInModal({
  item,
  stockIn,
  setStockIn,
  onClose,
}) {
  const handleDelete = async () => {
    try {
      await deleteStockIn(item._id);

      setStockIn(
        stockIn.filter(
          (s) => s._id !== item._id
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to delete stock");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        <div className="delete-icon">
          📦
        </div>

        <h2>Delete Stock In</h2>

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

export default DeleteStockInModal;