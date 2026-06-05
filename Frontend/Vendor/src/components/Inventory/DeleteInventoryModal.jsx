import { deleteInventory } from "../../services/inventoryService";

function DeleteInventoryModal({
  item,
  inventory,
  setInventory,
  onClose,
}) {

  const handleDelete = async () => {
    try {
      await deleteInventory(item._id);

      // ✅ Same pattern as Employee delete
      setInventory(
        inventory.filter(
          (i) => i._id !== item._id
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to delete inventory");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        {/* ICON */}
        <div className="delete-icon">
          🗑️
        </div>

        {/* TITLE */}
        <h2>Delete Inventory</h2>

        {/* MESSAGE */}
        <p>
          Are you sure you want to delete
          <strong> {item.itemName}</strong>?
        </p>

        {/* ACTIONS */}
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

export default DeleteInventoryModal;