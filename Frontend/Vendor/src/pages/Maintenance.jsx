import { useEffect, useState } from "react";
// import MaintenanceForm from "../components/maintenance/MaintenanceForm";
// import MaintenanceTable from "../components/maintenance/MaintenanceTable";
import { getMaintenance, addMaintenance } from "../services/maintenanceService";
// import axios from "axios";

function Maintenance() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    issue: "",
    maintenanceType: "",
    cost: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getMaintenance();
    setRecords(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMaintenance(form);
    loadData();
  };

  return (
    <div>
      <h2>Maintenance Tracking</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Issue"
          onChange={(e) => setForm({ ...form, issue: e.target.value })}
        />
        <input
          placeholder="Type"
          onChange={(e) => setForm({ ...form, maintenanceType: e.target.value })}
        />
        <input
          placeholder="Cost"
          onChange={(e) => setForm({ ...form, cost: e.target.value })}
        />
        <button>Add Record</button>
      </form>

      <hr />

      <ul>
        {records.map((r) => (
          <li key={r._id}>
            {r.issue} - {r.maintenanceType} - ₹{r.cost}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Maintenance;