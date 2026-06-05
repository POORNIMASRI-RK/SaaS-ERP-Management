import { useEffect, useState } from "react";
import { updateMachine } from "../../services/machineService";

function EditMachineModal({ isOpen, onClose, selectedMachine, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    model: "",
    location: "",
    status: "Active",
    date: "",
  });

  useEffect(() => {
    if (selectedMachine) {
      setForm({
        name: selectedMachine.name || "",
        model: selectedMachine.model || "",
        location: selectedMachine.location || "",
        status: selectedMachine.status || "Active",
        date: selectedMachine.date || "",
      });
    }
  }, [selectedMachine]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMachine(selectedMachine._id, form);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Edit Machine</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Machine Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="model"
            placeholder="Model"
            value={form.model}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />

          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Inactive">Inactive</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMachineModal;