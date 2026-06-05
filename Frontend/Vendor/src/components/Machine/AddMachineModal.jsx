import { useState } from "react";
import { addMachine } from "../../services/machineService";

function AddMachineModal({
  isOpen,
  onClose,
  onSuccess
}) {
  const [form, setForm] = useState({
    name: "",
    model: "",
    status: "Active",
    location: "",
    lastServiceDate: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addMachine(form);

      onSuccess();   // ✅ refresh table from backend
      onClose();     // close modal

      // optional reset form
      setForm({
        name: "",
        model: "",
        status: "Active",
        location: "",
        lastServiceDate: ""
      });

    } catch (error) {
      console.error("Add machine error:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2 className="modal-title">Add Machine</h2>

        <form className="form-grid" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Machine Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input name="model" value={form.model} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Breakdown">Breakdown</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input name="location" value={form.location} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Service Date</label>
            <input type="date" name="lastServiceDate" value={form.lastServiceDate} onChange={handleChange} />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit">
              Save Machine
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default AddMachineModal;