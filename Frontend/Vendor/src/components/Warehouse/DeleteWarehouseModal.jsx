import { deleteWarehouse } from "../../services/warehouseService";

function DeleteWarehouseModal({
  warehouse,
  warehouses,
  setWarehouses,
  onClose,
}) {
  const handleDelete =
    async () => {
      try {
        await deleteWarehouse(
          warehouse._id
        );

        setWarehouses(
          warehouses.filter(
            (w) =>
              w._id !==
              warehouse._id
          )
        );

        onClose();
      } catch (error) {
        console.log(error);

        alert(
          "Failed to delete warehouse"
        );
      }
    };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        <div className="delete-icon">
          🏭
        </div>

        <h2>
          Delete Warehouse
        </h2>

        <p>
          Are you sure you want
          to delete
          <strong>
            {" "}
            {
              warehouse.warehouseName
            }
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
            onClick={
              handleDelete
            }
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteWarehouseModal;