import { useEffect, useState } from "react";
import { getMachines, deleteMachine } from "../services/machineService";
import AddMachineModal from "../components/Machine/AddMachineModal";
import EditMachineModal from "../components/Machine/EditMachineModal";

function MachineManagement() {
  const [machines, setMachines] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);

  // Load machines
  const fetchMachines = async () => {
    try {
      const res = await getMachines();
      setMachines(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMachines();
  }, []);

  // Edit
  const handleEdit = (machine) => {
    setSelectedMachine(machine);
    setIsEditOpen(true);
  };

  // Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteMachine(id);
      fetchMachines();
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h2>Machine Management</h2>
        <button onClick={() => setIsAddOpen(true)}>+ Add Machine</button>
      </div>

      {/* TABLE */}
      <table className="machine-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Machine Name</th>
            <th>Machine Code</th>
            <th>Model</th>
            <th>Status</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {machines.map((machine, index) => (
            <tr key={machine._id}>
              <td>{index + 1}</td>
              <td>{machine.name}</td>
              <td>{machine.code}</td>
              <td>{machine.model}</td>

              <td>
                <span
                  className={
                    machine.status === "Active"
                      ? "status active"
                      : machine.status === "Under Maintenance"
                      ? "status maintenance"
                      : "status inactive"
                  }
                >
                  {machine.status}
                </span>
              </td>

              <td>{machine.location}</td>

              <td>
                <button onClick={() => handleEdit(machine)}>Edit</button>
                <button onClick={() => handleDelete(machine._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODALS */}
      <AddMachineModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSuccess={fetchMachines}
      />

      <EditMachineModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        selectedMachine={selectedMachine}
        onSuccess={fetchMachines}
      />
    </div>
  );
}

export default MachineManagement;