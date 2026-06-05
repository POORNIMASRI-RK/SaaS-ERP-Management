import { useState } from "react";

function MaintenanceForm({ onAdd }) {
  const [form, setForm] = useState({
    issue: "",
    maintenanceType: "",
    cost: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ issue: "", maintenanceType: "", cost: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Maintenance</h3>

      <input
        placeholder="Issue"
        value={form.issue}
        onChange={(e) => setForm({ ...form, issue: e.target.value })}
      />

      <input
        placeholder="Type (Preventive/Repair)"
        value={form.maintenanceType}
        onChange={(e) => setForm({ ...form, maintenanceType: e.target.value })}
      />

      <input
        placeholder="Cost"
        type="number"
        value={form.cost}
        onChange={(e) => setForm({ ...form, cost: e.target.value })}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default MaintenanceForm;