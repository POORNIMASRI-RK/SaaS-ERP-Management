import { useState } from "react";
import { updateWarehouse } from "../../services/warehouseService";

function EditWarehouseModal({
  warehouse,
  warehouses,
  setWarehouses,
  onClose,
}) {
  const [form, setForm] =
    useState({
      warehouseName:
        warehouse.warehouseName ||
        "",

      warehouseCode:
        warehouse.warehouseCode ||
        "",

      location:
        warehouse.location || "",

      managerName:
        warehouse.managerName ||
        "",

      capacity:
        warehouse.capacity || "",

      currentStock:
        warehouse.currentStock ||
        "",

      status:
        warehouse.status ||
        "Active",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleUpdate =
    async () => {
      try {
        setLoading(true);

        const res =
          await updateWarehouse(
            warehouse._id,
            form
          );

        setWarehouses(
          warehouses.map(
            (w) =>
              w._id ===
              warehouse._id
                ? res.data
                : w
          )
        );

        setLoading(false);
        onClose();
      } catch (error) {
        console.log(error);
        setLoading(false);

        alert(
          "Failed to update warehouse"
        );
      }
    };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Edit Warehouse</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>
              Warehouse Name
            </label>
            <input
              name="warehouseName"
              value={
                form.warehouseName
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>
              Warehouse Code
            </label>
            <input
              name="warehouseCode"
              value={
                form.warehouseCode
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>
              Location
            </label>
            <input
              name="location"
              value={
                form.location
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>
              Manager Name
            </label>
            <input
              name="managerName"
              value={
                form.managerName
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              value={
                form.capacity
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>
              Current Stock
            </label>
            <input
              type="number"
              name="currentStock"
              value={
                form.currentStock
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={
                form.status
              }
              onChange={
                handleChange
              }
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
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
            onClick={
              handleUpdate
            }
            disabled={
              loading
            }
          >
            {loading
              ? "Updating..."
              : "Update Warehouse"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditWarehouseModal;